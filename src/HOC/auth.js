import React, {Component} from 'react';
import {connect} from 'react-redux';

export default (WrappedComponent, to = '/sign-in', redirect = false) => {
    class Auth extends Component {
        componentDidMount(){
            this.checkAuth();
        }

        componentDidUpdate(){
            this.checkAuth();
        }

        checkAuth(){
            const {auth, history} = this.props;

            console.log('Auth:', auth);
            console.log('Redirect:', redirect);

            if(auth === redirect){
                history.push(to);
            }
        }
        render(){
            return <WrappedComponent {...this.props}/>
        }
    }
    function mapStateToProps(state){
        return{
            auth: state.user.auth
        }
    }
    return connect(mapStateToProps)(Auth);
}

