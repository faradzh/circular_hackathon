/**
 * Created by faradj on 5/13/17.
 */
import jQuery from 'jquery';
import { browserHistory } from 'react-router';

export function submitData(e) {
    e.preventDefault();
    return (dispatch, getState) => {
        const url = '/profiles/create-profile';
        const signUpData = getState().signUpReducer.data;
        console.log("Hack", signUpData);
        jQuery.get(url, signUpData, (response) => {
            if (response.message === "ok") {
                browserHistory.push('/dashboard');
            }
            else {
                console.log('Error', response);
            }
        })
    };
}

export function setSignUpData(payload) {
    return {
        type: 'SET_SIGNUP_DATA',
        payload: payload
    }
}