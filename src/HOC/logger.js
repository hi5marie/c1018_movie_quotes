import React, {Component} from 'react';

export default (WrappedComponent, prefix = '') => {
    class Logger extends Component{

        log(msg){
            console.log(prefix, msg);

        }
        render(){
            console.log('Logger Props:', this.props);

            return <WrappedComponent {...this.props} log={this.log}/>
        }
    }
    return Logger;
}