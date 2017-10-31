import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Api from './../fetch.js'
// import App from "./../Components/App.js"
class Syd3 extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        }
    }
    fu2(){
        this.context.router.history.push('/Syd1')
    }
    fu() {
        Api.user.goodsGet(0, 4).then(({ ret, msg, code }) => {
            let array = ret.data
            this.setState({
                list: array
            });
        });
    }
    render() {
        return (
            <div>
                <div>
                    {  
                        this.state.list.map(function (username,i){  
                            return <li key={i}>{username.product_id}</li>  
                        })  
                       
                    }  
                </div>
                <div onClick={this.fu.bind(this)}>123</div>
                <div onClick={this.fu2.bind(this)}>123421313123</div>
                <Link to="/Syd1">xxxx3</Link>
            </div>
        );

    }
}

export default Syd3;