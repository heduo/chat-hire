import io from 'socket.io-client';
import axios from '../axiosInstance';

const socket = io('ws://localhost:4000');
// get message list
const MSG_LIST = 'MSG_LIST';
// receive message
const MSG_RECV = 'MSG_RECV';
// read message
const MSG_READ = 'MSG_READ';

const initState = {
    chatMsg: [],
    users: [],
    unRead: 0,
};

export const chat = (state = initState, action) => {
    switch (action.type) {
        case MSG_LIST:
            return {
                ...state,
                chatMsg: action.msgs,
                unRead: action.msgs.filter(v => (!v.read && v.to === action.userid)).length,
                users: action.users
            };
        case MSG_RECV:
            let count = 0;
            if (action.payload.to === action.userid) {
                count = count + 1
            }
            return {...state, chatMsg: [...state.chatMsg, action.payload], unRead: state.unRead + count};
        case MSG_READ:
            const {from, num} = action.payload;
            return {
                ...state,
                chatMsg: state.chatMsg.map(v => ({...v, read: v.from === from ? true : v.read})),
                unRead: state.unRead - num
            };
        default:
            return state;
    }
};

const msgList = (msgs, users, userid) => {
    return {
        type: MSG_LIST,
        msgs: msgs,
        users: users,
        userid: userid
    }
};

const msgRecv = (msg, userid) => {
    return {
        type: MSG_RECV,
        payload: msg,
        userid: userid
    }
};

export const getMsgList = () => {
    return (dispatch, getState) => {
        axios.get('/user/getmsglist')
            .then(res => {
                if (res.status === 200 && res.data.code === 0) {
                    const userid = getState().user._id;
                    dispatch(msgList(res.data.msgs, res.data.users, userid))
                }
            })
    }
};

export const sendMsg = ({from, to, msg}) => {
    return () => {
        socket.emit('sendmsg', {from, to, msg});
    }

};

const msgRead = ({from, myId, num}) => {
    return {
        type: MSG_READ,
        payload: {from, myId, num}
    }
}

export const readMsg = (from) => {
    return (dispatch, getState) => {
        axios.post('/user/readmsg', {from})
            .then(res => {
                const myId = getState().user._id;
                if (res.status === 200 && res.data.code === 0) {
                    dispatch(msgRead({from, myId, num: res.data.num}));
                }
            })
    }
};

export const recvMsg = () => {
    return (dispatch, getState) => {
        socket.on('recvmsg', function (data) {
            console.log('recvmsg', data);
            const userid = getState().user._id;
            dispatch(msgRecv(data, userid))
        })
    }
};