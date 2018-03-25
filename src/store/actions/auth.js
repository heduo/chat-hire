import * as actionTypes from './actionTypes';
import axios from 'axios';

export const registerStart = () => {
    return {
        type: actionTypes.REGISTER_START
    }
};

export const registerSuccess = (username, pwd, userType) => {
    return {
        type: actionTypes.REGISTER_SUCCESS,
    }
};

export const register = (username, pwd, pwd2nd, userType ) => {
    return dispatch => {
        dispatch(registerStart());
    }
};