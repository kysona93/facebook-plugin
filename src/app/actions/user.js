export const USER_SIGN_UP = "USER_SIGN_UP";
export const USER_SING_UP_SUCCESS = "USER_SING_UP_SUCCESS";
export const USER_SIGN_UP_FAIL = "USER_SIGN_UP_FAIL";

export const USER_SIGN_IN = "USER_SIGN_IN";
export const USER_SING_IN_SUCCESS = "USER_SING_IN_SUCCESS";
export const USER_SIGN_IN_FAIL = "USER_SIGN_IN_FAIL";

export const OPEN_SIGN_IN="OPEN_SIGN_IN";
export const CLOSE_SIGN_IN="CLOSE_SIGN_IN";

export const SEND_EMAIL_OR_PHONE = "SEND_USER_EMAIL_OR_PHONE";
export const SEND_EMAIL_OR_PHONE_SUCCESS = "SEND_EMAIL_OR_PHONE_SUCCESS";
export const SEND_EMAIL_OR_PHONE_FAIL = "SEND_EMAIL_OR_PHONE_FAIL";

export const SET_NEW_PASSWORD="SET_NEW_PASSWORD";
export const SET_NEW_PASSWORD_SUCCESS="SET_NEW_PASSWORD_SUCCESS";
export const SET_NEW_PASSWORD_FAIL="SET_NEW_PASSWORD_FAIL";

export const OPEN_SIGN_UP="OPEN_SIGN_UP";
export const CLOSE_SIGN_UP="CLOSE_SIGN_UP";
export const VERIFY_CODE="VERIFY_CODE";
export const VERIFY_CODE_SUCCESS="VERIFY_CODE_SUCCESS";
export const VERIFY_CODE_FAIL="VERIFY_CODE_FAIL";
export const OPEN_VERIFY_CODE='OPEN_VERIFY_CODE'
export const CLOSE_VERIFY_CODE='CLOSE_VERIFY_CODE';
export const VERIFY_SOCIAL_ACCOUNT_PHONE='VERIFY_SOCIAL_ACCOUNT_PHONE';
export const VERIFY_SOCIAL_ACCOUNT_PHONE_SUCCESS='VERIFY_SOCIAL_ACCOUNT_PHONE_SUCCESS'
export const VERIFY_SOCIAL_ACCOUNT_PHONE_FAIL='VERIFY_SOCIAL_ACCOUNT_PHONE_FAIL'

//action for user log out
export const USER_LOG_OUT = 'USER_LOG_OUT';
export const USER_LOG_OUT_SUCCESS = 'USER_LOG_OUT_SUCCESS';
export const USER_LOG_OUT_FAIL = 'USER_LOG_OUT_FAIL';

export const OPEN_VERIFY_PHONE='OPEN_VERIFY_PHONE';
export const CLOSE_VERIFY_PHONE='CLOSE_VERIFY_PHONE';

export function userLogOut(token){
    return{
        type: USER_LOG_OUT,
        token
    }
}

export function userSingInAction(user){
    console.log("USER SIGN IN ACTION ",user);
    return{
        type:USER_SIGN_IN,
        user
    }
}
export function userSingUpAction(user){
    console.log("action sign up" + JSON.stringify(user));
    return{
        type: USER_SIGN_UP,
        user: user
    }
}

export function socialSignUp(){
    console.log("action social")
    return {
        type: 'something'
    }
}

/* This action is getting email or password when user forget their password */
export function actionSendMailOrPhone(value){
    //console.log("action forget password"+value)
    return {
        type:SEND_EMAIL_OR_PHONE,
        value: value
    }
}
/* This function is used to update new password */
export function actionSetNewPassword(value){
    //console.log("action set new password"+value)
    return {
        type:SET_NEW_PASSWORD,
        value: value
    }
}

