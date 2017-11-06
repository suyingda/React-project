import React, { Component } from 'react';

import Api from './../fetch.js'
import App from "./../Components/App.js"

// import His from './../Mixin.js'
class Syd2 extends Component {
    fn() {
        // His.push('/Content')
    }
    render() {
        return (
            <App>

                <div onClick={this.fn.bind(this)}>我是第二个点击</div>
            </App>
        );
    }
}

export default Syd2;