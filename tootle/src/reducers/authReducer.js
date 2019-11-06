import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
    isSignedIn: null,
    userDetails: null,
    userId: null,
};
export default (state = {INITIAL_STATE}, action) => {
switch(action.type){
    case SIGN_IN:
        return {...state, 
            isSignedIn: true, 
            userDetails:  action.payload,
            userId: action.payload['userId']
        }
    case SIGN_OUT:
        return {...state, isSignedIn: false, userDetails: null, userId:null}
    default: 
        return state;
}
};