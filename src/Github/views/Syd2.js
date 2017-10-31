import React, { Component } from 'react';

import Api from './../fetch.js'
import App from "./../Components/App.js"
class Syd2 extends Component {
    fn(){
      
        console.log(Api.user.changeNumPost(163,290,1))
        console.log(1)
    }
    render() {
        return (
            <App>
                
          <div onClick={this.fn.bind(this)}>suyingda2</div> 
            </App>
        );
    }
}

export default Syd2;