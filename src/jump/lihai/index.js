import React, { Component } from 'react';


import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'

class App extends Component {
    constructor() {
        super();
    }


    render() {
        console.log(this.props)
        return (
            <div>
                <Route  
                    render={props => (fakeAuth.isAuthenticated ? (<Component {...props} />) : (
                        <Redirect to={{
                            pathname: '/login',
                            state: { from: props.location }
                        }} />
                    )
                    )} />
            </div>
        );
    }
}

export default App;
/* const PrivateRoute = ({ component: Component,...rest }) => (
    <Route {...rest}
     render={props => (fakeAuth.isAuthenticated ? (<Component {...props}/>) : (
            <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }}/>
        )
    )}/>
) */