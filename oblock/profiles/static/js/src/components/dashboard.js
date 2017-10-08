import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wallet from './wallet';
import UserId from './userId';

import { fetchData } from '../actions/dashboardActions';

const mapStateToProps = (state) => {
    return {
        data: state.dashboardReducer.data
    }
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchData
    }, dispatch)
};

class Dashboard extends React.Component {

    componentWillMount () {
        this.props.fetchData();
    }

    render () {
        return (
            <main id="main-container" style={{minHeight: '263px'}}>

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
                                    <UserId />
                                </div>
                                <div className="col-md-4"></div>
                                <div className="col-md-4">
                                    <Wallet />
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
                                        <tr>
                                            <td className="text-center text-muted" style={{width: '200px'}}>September 29, 2016</td>
                                            <td style={{width: '100px'}}>#ID59630</td>
                                            <td>
                                                <a className="font-w600" href="javascript:void(0)">Calendious</a>
                                            </td>
                                            <td className="text-right">
                                                <a className="font-w600" href="javascript:void(0)">Ethan Howard</a>
                                            </td>
                                            <td className="text-right" style={{width: '80px'}}>
                                                <span className="font-w600 text-success">+ $44</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center text-muted">September 29, 2016</td>
                                            <td>#ID59629</td>
                                            <td>
                                                <a className="font-w600" href="javascript:void(0)">Calendious</a>
                                            </td>
                                            <td className="text-right">
                                                <a className="font-w600" href="javascript:void(0)">Emma Cooper</a>
                                            </td>
                                            <td className="text-right">
                                                <span className="font-w600 text-success">+ $44</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center text-muted">September 29, 2016</td>
                                            <td>#ID59628</td>
                                            <td>
                                                <a className="font-w600" href="javascript:void(0)">Super Badges Pack</a>
                                            </td>
                                            <td className="text-right">
                                                <a className="font-w600" href="javascript:void(0)">Ronald George</a>
                                            </td>
                                            <td className="text-right">
                                                <span className="font-w600 text-success">+ $58</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center text-muted">September 29, 2016</td>
                                            <td>#ID59627</td>
                                            <td>
                                                <a className="font-w600" href="javascript:void(0)">Todo App</a>
                                            </td>
                                            <td className="text-right">
                                                <a className="font-w600" href="javascript:void(0)">Craig Stone</a>
                                            </td>
                                            <td className="text-right">
                                                <span className="font-w600 text-success">+ $46</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center text-muted">September 29, 2016</td>
                                            <td>#ID59626</td>
                                            <td>
                                                <a className="font-w600" href="javascript:void(0)">Mailday</a>
                                            </td>
                                            <td className="text-right">
                                                <a className="font-w600" href="javascript:void(0)">Vincent Sims</a>
                                            </td>
                                            <td className="text-right">
                                                <span className="font-w600 text-success">+ $52</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center text-muted">September 29, 2016</td>
                                            <td>#ID59625</td>
                                            <td>
                                                <a className="font-w600" href="javascript:void(0)">Super Badges Pack</a>
                                            </td>
                                            <td className="text-right">
                                                <a className="font-w600" href="javascript:void(0)">Ann Parker</a>
                                            </td>
                                            <td className="text-right">
                                                <span className="font-w600 text-success">+ $58</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center text-muted">September 29, 2016</td>
                                            <td>#ID59624</td>
                                            <td>
                                                <a className="font-w600" href="javascript:void(0)">Super Badges Pack</a>
                                            </td>
                                            <td className="text-right">
                                                <a className="font-w600" href="javascript:void(0)">Vincent Sims</a>
                                            </td>
                                            <td className="text-right">
                                                <span className="font-w600 text-success">+ $58</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center text-muted">September 29, 2016</td>
                                            <td>#ID59623</td>
                                            <td>
                                                <a className="font-w600" href="javascript:void(0)">Super Badges Pack</a>
                                            </td>
                                            <td className="text-right">
                                                <a className="font-w600" href="javascript:void(0)">Dennis Ross</a>
                                            </td>
                                            <td className="text-right">
                                                <span className="font-w600 text-success">+ $58</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center text-muted">September 29, 2016</td>
                                            <td>#ID59622</td>
                                            <td>
                                                <a className="font-w600" href="javascript:void(0)">e-Music</a>
                                            </td>
                                            <td className="text-right">
                                                <a className="font-w600" href="javascript:void(0)">Joshua Munoz</a>
                                            </td>
                                            <td className="text-right">
                                                <span className="font-w600 text-success">+ $50</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center text-muted">September 28, 2016</td>
                                            <td>#ID59621</td>
                                            <td>
                                                <a className="font-w600" href="javascript:void(0)">e-Music</a>
                                            </td>
                                            <td className="text-right">
                                                <a className="font-w600" href="javascript:void(0)">Roger Hart</a>
                                            </td>
                                            <td className="text-right">
                                                <span className="font-w600 text-success">+ $50</span>
                                            </td>
                                        </tr>
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
            </main>
        )
    }
}
export default connect(mapStateToProps, matchDispatchToProps)(Dashboard);