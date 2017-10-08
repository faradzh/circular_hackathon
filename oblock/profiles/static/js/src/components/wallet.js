import React from 'react';
require('../../../css/sb-admin-2.css');

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setSignUpData, submitData } from '../actions/signUpActions';

const mapStateToProps = (state) => {
    return {
        signUpData: state.signUpReducer.data
    }
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setSignUpData,
        submitData
    }, dispatch)
};

class Wallet extends React.Component {

    render () {
        return (
            <div className="block block-themed">
                <div className="block-header bg-modern">
                    <h3 className="block-title">Wallet</h3>
                </div>
                <div className="block-content block-content-full text-center">
                    <div className="js-pie-chart pie-chart" data-percent="100" data-line-width="2" data-size="150" data-bar-color="#14adc4" data-track-color="#eeeeee">
                        <span className="h4">
                            <i className="si si-wallet fa-3x text-modern"/>
                            <br />
                            <span>400</span><span> <i>ocoins</i></span>
                        </span>
                    <canvas height="150" width="150"/></div>
                </div>
                <div className="block-content bg-gray-lighter">
                    <div className="row items-push text-center">
                        <div className="col-xs-6">
                        </div>
                        <div className="col-xs-6">
                            <button className="btn btn-info push-5-r push-10" type="button"><i className="fa fa-plus"/> Deposit</button>
                        </div>
                    </div>
                </div>
                <div className="alert alert-success alert-dismissable">
                    <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                    <p><i className="fa fa-check"/> You received 10 ocoins from <a className="alert-link" href="javascript:void(0)">EcoCompany</a></p>
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps, matchDispatchToProps)(Wallet);