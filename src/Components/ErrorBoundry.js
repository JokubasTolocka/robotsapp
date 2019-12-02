import React, {Component} from 'react';

class ErrorBoundry extends Component{
    constructor(){
        super();
        this.state = {
            hasError: false
        }
    }
    componentDidCatch(error, info) {
        this.setState({hasError: true});
    }
    
    render(){
        if(this.state.hasError){ //if error is truthy
            return <h1>Oops. This doesn't work!</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;