
import axiosInstance from '../axiosInstance';
import {getRedirectPath} from "../util";

const LOAD_DATA = 'LOAD_DATA';
 const REGISTER_START = 'REGISTER_START';
// const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const AUTH_SUCCESS = 'AUTH_SUCCESS';
const LOGIN_START = 'LOGIN_START';
const LOGOUT = 'LOGOUT';
const ERROR_MSG = 'ERROR_MSG';

const initialState = {
    redirectTo:'',
    //isAuth: false,
    msg:'',
    user: '',
    type: ''
};

// reducer
export function user(state = initialState, action){
    switch (action.type){
        // load user info to redux
        case LOAD_DATA:
            return {...state, ...action.payload};
        case LOGIN_START:
            return state;
        case AUTH_SUCCESS:
            return {...state, redirectTo:getRedirectPath(action.payload), msg:'SUCCESS', ...action.payload};
        case LOGOUT:
            return {...initialState, redirectTo:'/login'};
        case ERROR_MSG:
            return {...state, msg:action.msg};
        default:
            return state;
    }
}


const authSuccess = (data)=> {
    return {
        type: AUTH_SUCCESS,
        payload:data
    }
};
const registerStart = () => {
    return {
        type: REGISTER_START
    }
};


const loginStart = ()=> {
    return {
        type: LOGIN_START
    }
};

export const logoutSubmit = () => {
    return {
        type: LOGOUT
    }
}


function errorMsg(msg) {
    return {type:ERROR_MSG, msg:msg}
}

export function loadData(userInfo) {
    return {type: LOAD_DATA, payload:userInfo}
}

 export function register({user, pwd, repeatpwd, type}) {
    if (!user || !pwd || !type){
        return errorMsg('Username and password are required');
    }
    if(pwd!==repeatpwd){
        return errorMsg('Password is not the same as previous one');
    }
    return dispatch => {
        dispatch(registerStart());
        axiosInstance.post('/user/register', {user, pwd, type})
            .then(
                res=>{
                if (res.status ===200 && res.data.code ===0){
                    dispatch(authSuccess({user, type}))
                }else{
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }
}

export function login({user, pwd}){
    if (!user || !pwd){
        return errorMsg('Username and password are required');
    }
    return dispatch => {
        dispatch(loginStart());
        axiosInstance.post('/user/login', {user, pwd})
            .then(
                res=>{
                    console.log(res);
                    if (res.status ===200 && res.data.code ===0){
                        dispatch(authSuccess(res.data.data))
                    }else{
                        dispatch(errorMsg(res.data.msg))
                    }
                })
    }
}

export function update(data){
    return dispatch => {
        axiosInstance.post('/user/update', data)
            .then(
                res=>{
                    console.log(res);
                    if (res.status ===200 && res.data.code ===0){
                        dispatch(authSuccess(res.data.data))
                    }else{
                        dispatch(errorMsg(res.data.msg))
                    }
                }
            )
    }
}