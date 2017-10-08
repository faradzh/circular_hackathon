import React from 'react';
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

class UserId extends React.Component {

    render () {
        const id = this.props.id;
        return (
            <div className="block block-themed">
                <div className="block-header bg-danger">
                    <ul className="block-options">
                        <li>
                            <button type="button" data-toggle="block-option" data-action="refresh_toggle" data-action-mode="demo">
                                {id}
                            </button>
                        </li>
                    </ul>
                    <h3 className="block-title">Personal Id: </h3>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(UserId);