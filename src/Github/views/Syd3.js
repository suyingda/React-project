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
let fodata = {
    nam:1,age:2
}
class Syd3 extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        }

    }

    fu2() {
        let  data = {
            id:3,
            name:'xxxxxx',
            age:36
        };
        data = JSON.stringify(data);
        let path = `/Jsonparse/${data}`;

        this.props.history.push(path);

    }
    fu3() {
        var data = {id:3,name:'xxxxxx',age:36};
        var path = {
          pathname:'/Queryloaction',
          query:data,
        }
        this.props.history.push(path);

    }
    fu4() {
        var data = {id:3,name:'xxxxxx',age:36};
        var path = {
          pathname:'/State',
          state:data,
        }
        this.props.history.push(path);

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
                <div onClick={this.fu2.bind(this)}>我也是点击事件Jsonparse</div>
                <div onClick={this.fu3.bind(this)}>我也是点击事件query</div>
                <div onClick={this.fu4.bind(this)}>我也是点击事件State</div>
                <hr />
                <Link to="/Syd1">xxxx3</Link>
                <hr />
                <AuthButton />
            </div>
        );

    }
}

export default Syd3;