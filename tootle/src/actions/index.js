import {SIGN_IN, SIGN_OUT} from './types';
export const signIn = (userDetails) => {
    return {
        type: SIGN_IN, 
        payload: userDetails
        
    };
};
export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};