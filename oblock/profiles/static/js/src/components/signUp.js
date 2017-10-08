import React from 'react';
const imageSrc = require('../../../images/logo-black-navbar.png');

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
            <div className="bg-white pulldown"  style={{top: '50px !important'}}>
                <div className="content content-boxed overflow-hidden" style={{padding: '0px 30px 1px'}}>
                    <div className="row">
                        <div style={{margin: '0 auto'}} className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
                            <div className="push-30-t push-20 animated fadeIn" style={{marginTop: '0px !important'}}>
                                <div className="text-center">
                                    <img src={imageSrc} />
                                    <h1 className="h4 push-10-t">Create Account</h1>
                                </div>

                                <form onSubmit={this.props.submitData} className="js-validation-register form-horizontal push-50-t push-50 " action="base_pages_register_v2.html" method="post" style={{marginTop: '20px !important', marginBottom: '20px !important'}}>
                                    <div className="form-group">
                                        <div className="col-xs-12">
                                            <div className="form-material form-material-success">
                                                <input onChange={this.props.setSignUpData} value={this.props.signUpData.username} className="form-control" type="text" id="register-username" name="username" placeholder="Please enter a username"/>
                                                <label for="register-username">Username</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-12">
                                            <div className="form-material form-material-success">
                                                <input onChange={this.props.setSignUpData} value={this.props.signUpData.fullname} className="form-control" type="text" id="register-email" name="fullname" placeholder="Please provide your fullname"/>
                                                <label for="register-email">Fullname</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-12">
                                            <div className="form-material form-material-success">
                                                <input onChange={this.props.setSignUpData} value={this.props.signUpData.email} className="form-control" type="email" id="register-password" name="email" placeholder="Choose an email"/>
                                                <label for="register-password">Email</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-12">
                                            <div className="form-material form-material-success">
                                                <input onChange={this.props.setSignUpData} value={this.props.signUpData.password} className="form-control" type="password" id="register-password" name="password" placeholder="Choose a strong password.."/>
                                                <label for="register-password">Password</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-12">
                                            <div className="form-material form-material-success">
                                                <input onChange={this.props.setSignUpData} className="form-control" type="password" id="register-password2" name="passwordConfirm" placeholder="..and confirm it"/>
                                                <label for="register-password2">Confirm Password</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-12 col-sm-6 col-sm-offset-3">
                                            <button className="btn btn-sm btn-block btn-success" type="submit">Create Account</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps, matchDispatchToProps)(SignUp);