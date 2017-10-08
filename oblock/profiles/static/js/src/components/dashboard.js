import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wallet from './wallet';
import UserId from './userId';
import ModalWindow from './modalWindow';
import auth from '../auth';

import { fetchData, setTransactionData, makeTransaction } from '../actions/dashboardActions';

const mapStateToProps = (state) => {
    return {
        data: state.dashboardReducer.data
    }
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchData,
        setTransactionData,
        makeTransaction
    }, dispatch)
};

class Dashboard extends React.Component {

    componentWillMount () {
        this.props.fetchData();
    }

    logOutHandler = (e) => {
        e.preventDefault();
        auth.logout();
        window.location.reload();
    };

    render () {
        const buttons = [<button className="btn btn-sm btn-info" onClick={this.props.makeTransaction} type="submit"><i className="fa fa-send push-5-r"/> Transfer</button>];
        const transactions = Object.keys(this.props.data).length > 0 ? this.props.data.transactions : [];
        return (
            <main id="main-container" style={{minHeight: '263px'}}>
                <div className="content-mini content-boxed">
                    <ul className="nav nav-pills nav-sub-header push-r" style={{float: 'right'}}>
                        <li onClick={this.logOutHandler}>
                            <a href="">
                                <i className="fa fa-sign-out push-5-r"/>Log Out
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="content content-boxed">
                    <div className="block">
                        <div className="block-header">
                            <ul className="block-options">
                                <li>
                                    <button type="button" data-toggle="block-option" data-action="refresh_toggle" data-action-mode="demo"><i className="si si-refresh"/></button>
                                </li>
                            </ul>
                            <h3 className="block-title">Dashboard</h3>
                        </div>
                        <div className="block-content block-content-full bg-gray-lighter text-center">
                        </div>
                        <div className="block-content">
                            <div className="row">
                                <div className="col-md-4">
                                    <UserId id={this.props.data.unique_id}/>
                                </div>
                                <div className="col-md-4"></div>
                                <div className="col-md-4">
                                    <Wallet balance={this.props.data.wallet_balance}/>
                                </div>
                            </div>
                        </div>
                        <div className="block-content block-content-full bg-gray-lighter text-center">
                            <h3 className="block-title">Transactions</h3>
                        </div>
                        <div className="block-content">
                            <div className="table-responsive">
                                <table className="table table-hover table-vcenter">
                                    <tbody>
                                    {
                                        transactions.map((transaction) => {
                                            return (
                                                <tr>
                                                    <td className="text-center text-muted" style={{width: '200px'}}>{transaction.timestamp}</td>
                                                    <td style={{width: '100px'}}>#ID{transaction.id}</td>
                                                    <td>
                                                        <a className="font-w600" href="javascript:void(0)">{transaction.wallet_from_owner_fullname}</a>
                                                    </td>
                                                    <td className="text-right">
                                                        <a className="font-w600" href="javascript:void(0)">{transaction.wallet_to_owner_fullname}</a>
                                                    </td>
                                                    <td className="text-right" style={{width: '80px'}}>
                                                        <span className="font-w600 text-success">+ {transaction.value}</span>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                </table>
                            </div>
                            <div className="text-center push">
                                <button className="btn btn-xs btn-default" type="button">
                                    <i className="fa fa-arrow-down push-5-r text-primary"/>Load More..
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalWindow header="Enter an account ID you want to transfer ocoins to:"
                buttons={buttons}>
                    <div className="form-group">
                        <label className="col-xs-12" htmlFor="register1-username">ID</label>
                        <div className="col-xs-12">
                            <input className="form-control" onChange={this.props.setTransactionData} type="text" id="register1-username" name="transactionUniqueId" placeholder="For instance: 156789"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-xs-12" htmlFor="register1-username">Amount of oCoins</label>
                        <div className="col-xs-12">
                            <input className="form-control" onChange={this.props.setTransactionData} type="text" id="register1-username" name="transactionAmount" placeholder="For instance: 10"/>
                        </div>
                    </div>
                </ModalWindow>
            </main>
        )
    }
}
export default connect(mapStateToProps, matchDispatchToProps)(Dashboard);