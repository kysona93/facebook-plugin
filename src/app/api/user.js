import axios from 'axios';
import {CONFIG, LOGOUT, API_ENDPOINT} from './headers';

/* This API is used for user forget password */
export function apiSendMailOrPhone(action) {
    const response = axios.post(API_ENDPOINT + "users/forgetpassword",
        JSON.stringify({
            email: action.value.email,
            phone: action.value.phone
        }),
        CONFIG)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log("error API", error)
        })
    return response;
}

/* This API is used for set new password */
export function apiSetNewPassword(action) {
    const response = axios.post(API_ENDPOINT + "users/resetpassword",
        JSON.stringify({
            password: action.value.password,
            verifiedCode: action.value.verifiedCode
        }),
        CONFIG)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log("error API", error)
        })
    return response;
}


export function userSignInApi(action) {
    const response = axios.post(API_ENDPOINT + "users/signin", JSON.stringify(action.user), CONFIG)
        .then(function (response) {
            return response.data;
        }).catch(function (error) {
            console.log(error)
            return response.data;
        })
    return response;
}

export function userSignUpApi(action) {
    const response = axios.post(API_ENDPOINT + "users/personal/signup", JSON.stringify(action.user), CONFIG)
        .then(function (response) {
            return response.data;
        }).catch(function (error) {
            console.log("error API", error)
        })
    return response;
}

export function verifyCodeApi(action) {
    const response = axios.put(API_ENDPOINT + "users/verification/" + action.code, JSON.stringify(action.code), CONFIG)
        .then(function (response) {
            return response.data;
        }).catch(function (error) {
            console.log("error API", error)
        })
    return response;
}


export function verifySocialAccountPhoneApi(action) {
    const response = axios.put(API_ENDPOINT + "users/social/" + action.user.socialId, JSON.stringify(action.user), CONFIG)
        .then(function (response) {
            return response.data;
        }).catch(function (error) {
            console.log("error API", error)
        })
    return response;
}

export function getLogout(action) {
    console.log("TOKEN", action.token);
    return axios.post(API_ENDPOINT + "users/signout", {}, {
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': 'AbCdEfGhIjK1',
            'X-Auth-Token': action.token
        }
    }).then(function (response) {
        return response.data.data;
    }).catch(function (error) {
        console.log("error API", error)
    });
}