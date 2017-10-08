/**
 * Created by faradj on 5/13/17.
 */
import jQuery from 'jquery';
import { browserHistory } from 'react-router';

export function fetchData() {
    return (dispatch, getState) => {
        const url = '/profiles/fetch-profile-data/';
        const userId = 12;
        jQuery.get(url, {user_id: userId}, (response) => {
            console.log("Response", response);
            if (response.message === "ok") {
                dispatch(setData(response.data))
            }
            else {
                console.log('Error', response);
            }
        })
    };
}

export function setData(payload) {
    return {
        type: 'SET_DASHBOARD_DATA',
        payload: payload
    }
}