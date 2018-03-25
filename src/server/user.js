const express = require('express');
const Router = express.Router();
const model = require('./model');
const utils = require('utility'); // for MD5 encription
const User = model.getModel('user');
const Chat = model.getModel('chat');

const _filter = {'pwd':0, '__v':0}; // filter out pwd and __v from database

// Chat.remove({}, function (e,d) {
//
// });

Router.get('/list', function (req, res){
   // User.remove({}, function(err, doc){});
    const type = req.query.type;
    User.find({type}, function (err, doc) {
        return res.json({code:0, data:doc})
    })
});

Router.get('/getmsglist', function (req, res) {
    const user = req.cookies.userid;
    // {'$or':[{from:user, to:user}]}
    User.find({}, function (e, userdoc) {
        let users = {};
        userdoc.forEach(v=>{
            users[v._id] = {name:v.user, avatar:v.avatar}
        });
        Chat.find({'$or':[{from:user}, {to:user}]}, function (err, doc) {
            if (!err){
                return res.json({code:0, msgs:doc, users:users});
            }
        })
    });

})
Router.get('/info', function (req, res) {
    // get cookies
    const userid = req.cookies.userid;
    // if userid not exist in cookies, return error code 1
    if (!userid){
        return res.json({code:1});
    }
    // if userid found in cookies, then use it to find user info in database
    User.findOne({_id:userid}, _filter,function (err, doc) {
        if (err){
            return res.json({code:1, msg:'No user cookies or user not exist'})
        }
        // if user info found, return the user info back to client
        if (doc){
            return res.json({code:0, data:doc});
        }
    })
});

Router.post('/update', function (req, res) {
    const userid = req.cookies.userid;
    if (!userid) {
        return json.dumps({code:1});
    }
    const body = req.body;
    // console.log('request body ', req.body );

    User.findByIdAndUpdate(userid, body, function (err, doc) {
        const data = Object.assign({}, {
            user:doc.user,
            type: doc.type
        }, body);
        return res.json({code:0, data});
    })

});

Router.post('/login', function (req, res) {
    const {user, pwd} = req.body;
                                          // don't return pwd and __v fields
    User.findOne({user, pwd:md5Pwd(pwd)}, _filter, function (err, doc) {
        if(!doc){
            return res.json({code:1, msg:'Username or password is not correct.'})
        }
        // set cookie data
        res.cookie('userid', doc._id);
        return res.json({code:0, data:doc});
    })
});

Router.post('/register', function (req, res) {
    // console.log('request body', req.body);
    const {user, pwd, type} = req.body;
    User.findOne({user:user}, function (err, doc) {
        if (doc){
            return res.json({code:1, msg:'Username is already existed'})
        }
        const userModel = new User({user, pwd: md5Pwd(pwd), type});
        userModel.save(function (err, doc) {
            if (err){
                return res.json({code:1, msg:'Can not create new record in database'});
            }
            const {user, type, _id} = doc;
            // set cookie
            res.cookie('userid', _id);
            return res.json({code:0, data:{user, type, _id}});
        });
    })
});

Router.post('/readmsg', function (req, res) {
    const myId = req.cookies.userid;
    const {from} = req.body;
    Chat.update(
        {from, to:myId},
        {'$set': {read:true}},
        {'multi': true},
        function (err, doc) {
        console.log(doc);
        if (!err){
            return res.json({code:0, num:doc.nModified})
        }
        return res.json({code:1, msg:'Update failed'});
    })
})

function md5Pwd(pwd) {
    const salt = 'derek_is_a_genius!@398$%!~yes_he_is';
    return utils.md5(utils.md5(pwd+salt));
}

module.exports = Router;