import _ from 'lodash';
import {
    FETCH_COMMENT,
    FETCH_COMMENTS,
    CREATE_COMMENT,
    DELETE_COMMENT,
    EDIT_COMMENT
} from '../actions/types';
export default (state={}, action) => {
    switch(action.type){
        case FETCH_COMMENTS:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        case FETCH_COMMENT:
            return {...state, [action.payload.id]: action.payload};
        case CREATE_COMMENT:
            return {...state, [action.payload.id]: action.payload};
        case EDIT_COMMENT:
            return {...state, [action.payload.id]: action.payload};
        case DELETE_COMMENT:
            return _.omit(state, action.payload)
        default:
            return state;
    }
}