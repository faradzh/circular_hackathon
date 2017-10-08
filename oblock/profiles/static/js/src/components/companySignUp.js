import React from 'react';
require('../../../css/sb-admin-2.css');

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCompanySignUpData, submitCompanyData } from '../actions/companySignUpActions';

const mapStateToProps = (state) => {
    return {
        companySignUpData: state.companySignUpReducer.data
    }
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setCompanySignUpData,
        submitCompanyData
    }, dispatch)
};

class CompanySignUp extends React.Component {

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
                                    <form onSubmit={this.props.submitCompanyData}>
                                        <fieldset>
                                            <div className="form-group">
                                                <input className="form-control" onChange={this.props.setCompanySignUpData} value={this.props.companySignUpData.username} placeholder="Username" name="username" type="name" autoFocus/>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" onChange={this.props.setCompanySignUpData} value={this.props.companySignUpData.companyName} placeholder="Company Name" name="companyName" type="name"/>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" onChange={this.props.setCompanySignUpData} placeholder="Email" name="email" type="email" value={this.props.companySignUpData.email}/>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" onChange={this.props.setCompanySignUpData} placeholder="Phone" name="phone" type="text" value={this.props.companySignUpData.phone}/>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" onChange={this.props.setCompanySignUpData} placeholder="Contacts" name="contacts" type="text" value={this.props.companySignUpData.contacts}/>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" onChange={this.props.setCompanySignUpData} placeholder="Password" name="password" type="password" value={this.props.companySignUpData.password}/>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" onChange={this.props.setCompanySignUpData} placeholder="Confirm password" name="passwordConfirm" type="password" value={this.props.companySignUpData.passwordConfirm}/>
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
export default connect(mapStateToProps, matchDispatchToProps)(CompanySignUp);