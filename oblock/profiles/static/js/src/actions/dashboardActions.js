/**
 * Created by faradj on 5/13/17.
 */
import jQuery from 'jquery';
import { browserHistory } from 'react-router';

export function fetchData() {
    return (dispatch, getState) => {
        const url = '/profiles/fetch-profile-data/';
        const userId = localStorage.currentUser ? JSON.parse(localStorage.currentUser).id : '';
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

export function makeTransaction() {
    return (dispatch, getState) => {
        const url = '/profiles/make-transaction/';
        const transactionUniqueId = getState().dashboardReducer.transactionData.transactionUniqueId;
        const transactionAmount = getState().dashboardReducer.transactionData.transactionAmount;
        const userId = 16;
        const params = {
            user_id: userId,
            transaction_unique_id: transactionUniqueId,
            transaction_amount: transactionAmount
        };
        jQuery.get(url, params, (response) => {
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

export function setTransactionData(payload) {
    return {
        type: 'SET_TRANSACTION_DATA',
        payload: payload
    }
}