import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";

const initialState = {
    username: '',
    pwd: '',
    userType: '',
    isAuth: '',
    msg: ''
};

const registerStart = (state, action) => {
    return updateObject(state, {
        msg: ''
    })
};

const userReducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.REGISTER_START:
            return
    }
};

export default  userReducer;