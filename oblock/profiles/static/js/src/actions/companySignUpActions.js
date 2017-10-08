/**
 * Created by faradj on 5/13/17.
 */
import jQuery from 'jquery';
import { browserHistory } from 'react-router';

export function submitCompanyData(e) {
    e.preventDefault();
    return (dispatch, getState) => {
        const url = '/profiles/create-company-profile';
        const signUpData = getState().companySignUpReducer.data;
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

export function setCompanySignUpData(payload) {
    return {
        type: 'SET_COMPANY_SIGNUP_DATA',
        payload: payload
    }
}