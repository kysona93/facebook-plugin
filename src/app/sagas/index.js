import { takeEvery, takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import {
    SEND_EMAIL_OR_PHONE,
    USER_SIGN_IN,
    USER_SIGN_UP,
    SET_NEW_PASSWORD,
    OPEN_SIGN_UP,
    CLOSE_SIGN_UP,
    VERIFY_CODE,
    VERIFY_SOCIAL_ACCOUNT_PHONE,
    SEND_USER_EMAIL,
    USER_LOG_OUT
} from './../actions/user';
import {
    doSendMailOrPhone,
    userSignInSaga,
    userSignUpSaga,
    resetUserPasswordSaga,
    verifyCode,
    verifySocialAccount,
    userLogout
} from './users/user';

export function* sagas() {
    yield [
        /*user authentication*/
        fork(takeEvery,USER_SIGN_UP,userSignUpSaga),
        fork(takeEvery,USER_SIGN_IN,userSignInSaga),
        fork(takeEvery,VERIFY_CODE,verifyCode),
        fork(takeEvery,VERIFY_SOCIAL_ACCOUNT_PHONE,verifySocialAccount),
        fork(takeEvery,SEND_EMAIL_OR_PHONE,doSendMailOrPhone),
        fork(takeEvery,SET_NEW_PASSWORD,resetUserPasswordSaga),
        fork(takeEvery, USER_LOG_OUT, userLogout)
    ];
}