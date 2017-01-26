import {
    SEND_EMAIL_OR_PHONE_SUCCESS,
    SEND_EMAIL_OR_PHONE_FAIL,
    USER_SING_IN_SUCCESS,
    USER_SIGN_IN_FAIL,
    USER_SING_UP_SUCCESS,
    USER_SIGN_UP_FAIL,
    SET_NEW_PASSWORD_FAIL,
    SET_NEW_PASSWORD_SUCCESS,
    OPEN_SIGN_UP,
    CLOSE_SIGN_UP,
    VERIFY_CODE_SUCCESS,
    VERIFY_CODE_FAIL,
    OPEN_VERIFY_CODE,
    CLOSE_VERIFY_CODE,
    VERIFY_SOCIAL_ACCOUNT_PHONE_FAIL,
    VERIFY_SOCIAL_ACCOUNT_PHONE_SUCCESS,
    USER_LOG_OUT_SUCCESS,
    USER_LOG_OUT_FAIL,
    OPEN_VERIFY_PHONE,
    CLOSE_VERIFY_PHONE
} from './../../actions/user';
/* This function is used to send email or phone number when user forget password */
export function sendEmailOrPhone(state = [{}], action) {
    switch (action.type) {
        case SEND_EMAIL_OR_PHONE_SUCCESS :
        {
            console.log("reducer found ")
            console.log(action.response); // get message
            return action.response.data
        }
        case SEND_EMAIL_OR_PHONE_FAIL:
        {
            console.log("reducer not found")
            console.log(action.response);
            return state;
        }
        default:
            return state;
    }
}
/* This function is used to set new password */
export function resetPasswordReducer(state = [{}], action) {
    switch (action.type) {
        case SET_NEW_PASSWORD_SUCCESS:
        {
            //console.log("Reducer",JSON.stringify(action));
            return action.response.data;
        }
        case SET_NEW_PASSWORD_FAIL:
            return state;
        default:
            return state;
    }
}

export function userSignUpReducer(state = [{}], action) {
    switch (action.type) {
        case USER_SING_UP_SUCCESS :
        {
            return action.response.data
        }
        case USER_SIGN_UP_FAIL:
            return state;
        default:
            return state;
    }
}
export function userSignInReducer(state = [{}], action) {
    switch (action.type) {
        case USER_SING_IN_SUCCESS :
        {
            return action.response.data
        }
        case USER_SIGN_IN_FAIL:
            return action.response.data
        default:
            return state;
    }
}

export function signUpModalReducer(state = [{}], action) {
    let new_state;
    switch (action.type) {
        case OPEN_SIGN_UP:
            new_state = JSON.parse(JSON.stringify(state));
            new_state.modal = new_state.modal ? new_state.modal : {}
            new_state.modal = {
                show: true
            }
            return new_state;

        case CLOSE_SIGN_UP:
            new_state = JSON.parse(JSON.stringify(state));
            new_state.modal = {
                show: false
            }
            return new_state;

        default:
            return state;
    }
}

export function verifyCodeReducer(state = [{}], action) {
    switch (action.type) {
        case VERIFY_CODE_SUCCESS:
            return action.response.data;
        case VERIFY_CODE_FAIL:
            return state;
        default:
            return state;
    }
}
export function verifySocailAccountPhoneReducer(state = [{}], action) {
    switch (action.type) {
        case VERIFY_SOCIAL_ACCOUNT_PHONE_SUCCESS:
            return action.response.data;
        case VERIFY_SOCIAL_ACCOUNT_PHONE_FAIL:
            return state;
        default:
            return state;
    }
}
export function verifyCodeModalReducer(state = [{}], action) {
    let new_state;
    switch (action.type) {
        case OPEN_VERIFY_CODE:
            new_state = JSON.parse(JSON.stringify(state));
            new_state.modal = new_state.modal ? new_state.modal : {}
            new_state.modal = {
                show: true,
                emailOrPhone: action.emailOrPhone
            }
            return new_state;

        case CLOSE_VERIFY_CODE:
            new_state = JSON.parse(JSON.stringify(state));
            new_state.modal = {
                show: false
            }
            return new_state;

        default:
            return state;
    }
}

export function verifyPhoneModalReducer(state = [{}], action) {
    let new_state;
    switch (action.type) {
        case OPEN_VERIFY_PHONE:
            new_state = JSON.parse(JSON.stringify(state));
            new_state.modal = new_state.modal ? new_state.modal : {}
            new_state.modal = {
                show: true
            }
            return new_state;

        case CLOSE_VERIFY_PHONE:
            new_state = JSON.parse(JSON.stringify(state));
            new_state.modal = {
                show: false
            }
            return new_state;

        default:
            return state;
    }
}

export function userLogout(state = [{}], action) {
    switch (action.type) {
        case USER_LOG_OUT_SUCCESS:
            return action.response;
        case USER_LOG_OUT_FAIL:
            return state;
        default:
            return state;
    }
}