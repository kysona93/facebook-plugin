
import { saveState, loadState, ActivateMailCookie } from './local_storage';


// function check admin logged into admin dashboard
export const checkAuthAdmin = (nextState, replace) => {
    console.log("ROLE LOGIN",loadState().userType);
    try {
        if(loadState().userType == undefined){
            replace('/');
        }else
        if (loadState().userType.toLocaleLowerCase() !== 'admin') {
            replace('/');
        }
    } catch (error) {
        replace('/');
    }
};

// function check Merchant logged into admin dashboard
export const checkAuthMerchant = (nextState, replace) => {
    console.log("Merchant : ",loadState().userType);
    try {
        if(loadState().userType == undefined){
            replace('/');
        }else if (loadState().userType.toLowerCase() !== 'merchant') {
            replace('/');
        }
    } catch (error) {
        replace('/');
    }
};

// function check User normal logged into admin dashboard
export const checkAuthNormal = (nextState, replace) => {
    console.log("CHECK ROLE LOGIN",loadState().userType);
    try {
        if(loadState().userType == undefined){
            replace('/');
        }else if (loadState().userType.toLowerCase() !== 'normal') {
            replace('/');
        }
    } catch (error) {
        replace('/');
    }
};

/* function check for signin/signup action if it logged auto goto another pages by role */
export const checkIsLogged = (nextState, replace) => {
    try {
        if (loadState().role == 1) {
            replace('/admin');
        } else if (loadState().role !== 1) {
            replace('/');
        } else {
            replace('/signin');
        }
    } catch (error) {
    }
};

/**
 * function check activate mail
 * if not activate from mail can not access this link
 */
export const checkActivate = (nextState, replace) => {
    try {
        if (loadState()) {
            replace('/');
        }
    } catch (error) {
        replace('/');
    }
}
