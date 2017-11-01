import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import Api from './../fetch.js'

import { Link, withRouter } from 'react-router-dom'

const AuthButton = withRouter(({ history }) => (

    <p>
        <button onClick={() => {
            history.push('/Syd2')
        }}>登出</button>
    </p>

))

class Syd3 extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        }

    }

    fu2() {
        this.props.history.push("/");

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
                        this.state.list.map(function (username, i) {
                            return <li key={i}>{username.product_id}</li>
                        })

                    }
                </div>
                <div onClick={this.fu.bind(this)}>123</div>
                <hr />
                <div onClick={this.fu2.bind(this)}>我也是点击事件</div>
                <hr />
                <Link to="/Syd1">xxxx3</Link>
                <hr />
                <AuthButton />
            </div>
        );

    }
}

export default Syd3;