import {combineReducers} from 'redux';
import {signupReducer, loginReducer} from './defaultReducers/authReducer';

const allReducer ={
    signupState: signupReducer,
    loginState: loginReducer
}

export default combineReducers(allReducer);