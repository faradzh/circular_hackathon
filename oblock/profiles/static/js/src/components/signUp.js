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

class SignUp extends React.Component {

    render () {
        return (
            <div className="col-md-12">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-md-offset-4">
                            <img src="../../user-platform/pages/img/logo-black-navbar.png" id="registration-logo"/>
                            <div className="login-panel panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Please Register</h3>
                                </div>
                                <div className="panel-body">
                                    <form onSubmit={this.props.submitData}>
                                        <fieldset>
                                            <div className="form-group">
                                                <input className="form-control" onChange={this.props.setSignUpData} value={this.props.signUpData.username} placeholder="Username" name="username" type="name" autoFocus/>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" onChange={this.props.setSignUpData} value={this.props.signUpData.fullname} placeholder="Full name" name="fullname" type="name"/>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" onChange={this.props.setSignUpData} placeholder="Email" name="email" type="email" value={this.props.signUpData.email}/>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" onChange={this.props.setSignUpData} placeholder="Password" name="password" type="password" value={this.props.signUpData.password}/>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" onChange={this.props.setSignUpData} placeholder="Confirm password" name="passwordConfirm" type="password" value={this.props.signUpData.passwordConfirm}/>
                                            </div>
                                            <button type="submit" className="btn btn-lg btn-success btn-block">Register</button>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
export default connect(mapStateToProps, matchDispatchToProps)(SignUp);