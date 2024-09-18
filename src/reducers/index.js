import { combineReducers } from 'redux';
import { signupReducer, loginReducer } from './defaultReducers/authReducer';
import { userReducer } from './defaultReducers/userReducer';
import { addExpenseReducer } from './defaultReducers/expenseReducer';
import { addTempUsersReducer } from './defaultReducers/tempUserReducer';

const allReducer = {
    signupState: signupReducer,
    loginState: loginReducer,
    userState: userReducer,
    expenseState: addExpenseReducer,
    tempUserState: addTempUsersReducer
}

export default combineReducers(allReducer);