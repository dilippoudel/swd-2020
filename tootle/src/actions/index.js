import {
    SIGN_IN, 
    SIGN_OUT, 
    CREATE_COMMENT,
    FETCH_COMMENT,
    FETCH_COMMENTS,
    EDIT_COMMENT,
    DELETE_COMMENT
} from './types';
import history from '../history';
import axios from 'axios';
export const signIn = (userDetails) => {
    return {
        type: SIGN_IN, 
        payload: userDetails,
        
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const createComment = formValues => async (dispatch, getState) => {
 const {userId} = getState().auth;
 const response = await axios.post(`http://localhost:3001/comments`, {...formValues, userId});
 dispatch({type: CREATE_COMMENT,payload: response.data});
 history.push('/');
};
export const fetchComments = () => async disatch => {
    const response = await axios.get(`http://localhost:3001/comments`);
    disatch({type: FETCH_COMMENTS, payload: response.data})
}
export const fetchComment = (id) => async disatch => {
    const response = await axios.get(`http://localhost:3001/comments/${id}`);
    disatch({type: FETCH_COMMENT, payload: response.data})
}
export const editComment = (id, formValues) => async disatch => {
    const response = await axios.patch(`http://localhost:3001/comments/${id}`, formValues);
    disatch({type: EDIT_COMMENT, payload: response.data});
    history.push('/')
}
export const deleteComment = (id) => async disatch => {
     await axios.delete(`http://localhost:3001/comments/${id}`);
    disatch({type: DELETE_COMMENT, payload: id});
    history.push('/')

}