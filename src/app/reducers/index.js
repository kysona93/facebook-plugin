import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from 'redux-form';
import {
    sendEmailOrPhone,
    userSignInReducer,
    userSignUpReducer,
    resetPasswordReducer,
    signUpModalReducer,
    verifyCodeReducer,
    verifyCodeModalReducer,
    verifySocailAccountPhoneReducer,
    userLogout,
    verifyPhoneModalReducer
} from './users/user';


export const reducers = combineReducers({
    routing: routerReducer,
    form: formReducer,
    userForgetPwd: sendEmailOrPhone,
    userSignUp: userSignUpReducer,
    userSignIn: userSignInReducer,
    userResetPwd: resetPasswordReducer,
    signUpModal: signUpModalReducer,
    verifyCode: verifyCodeReducer,
    verifyCodeModal: verifyCodeModalReducer,
    verifySocialAccountPhone: verifySocailAccountPhoneReducer,
    userLogout: userLogout,
    verifyPhoneModal:verifyPhoneModalReducer
});