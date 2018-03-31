const mongoose = require('mongoose');

const DB_URL = 'mongodb://admin:admin@ds223609.mlab.com:23609/quickhire'; // mlab.com, ilheduo
mongoose.connect(DB_URL);

const models = {
    user: {
        'user': {'type': String, 'require': true},
        'pwd': {'type': String, 'require':true},
        'type': {'type': String, 'require': true},
        'avatar': {'type': String},
        'desc': {'type': String},
        'title': {'type': String},

        'company': {'type': String},
        'salary': {'type':String}
    },
    chat: {
        'chat_id':{'type':String, 'require':true},
        'from': {'type': String, 'require':true},
        'to': {'type': String, 'require':true},
        'create_time': {'type': Number, 'default':Date.now(), 'require':true},
        'content': {'type': String, 'require':true, 'default':''},
        'read': {'type': Boolean, 'require':true, 'default':false}
    }
};

for (let m in models){
    mongoose.model(m, new mongoose.Schema(models[m]));
}

module.exports = {
    getModel: function(name){
        return mongoose.model(name);
    }
}