import React from 'react'

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';  //router  

import './index.css'

import Head from './components/Head.js';
import Content from './components/Content.js';
import Bottom from './components/Bottom.js';
// import Top from './components/Top.js';
const BasicExample = () => (
    <Router>
        <div>
            <ul className="head">
                <li><Link to="/">首页</Link></li>
                <li><Link to="/Head">关于</Link></li>
                <li><Link to="/Content">主题列表</Link></li>
                <li><Link to="/Topics">Topics</Link></li>
            </ul>
            <br />
            <Route exact path="/" component={Head} />
            <Route path="/Head" component={Head} />
            <Route path="/Content" component={Content} />
            <Route path="/Topics" component={Topics} />
            <div>
                <Bottom/>
            </div>
        </div>

    </Router>
)

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)
const Topics = ({ match }) => (
    <div>
        <h2>主题列表</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    使用 React 渲染
        </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    组件
        </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    属性 v. 状态
        </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic} />
        <Route exact path={match.url} render={() => (
            <h3>请选择一个主题。</h3>
        )} />
    </div>
)



export default BasicExample