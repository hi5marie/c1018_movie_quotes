import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {signIn} from '../../actions';

let SignIn = props => {
    return <button onClick={props.signIn} className="btn blue">Sign In</button>
};

SignIn = connect(null, {
    signIn: signIn
})(SignIn);

export default reduxForm({
    form: 'sign-in'
})(SignIn);