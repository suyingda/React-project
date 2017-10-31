import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';



const Thumbnail = () => (
  <div>
    <h2>首页</h2>
  </div>
)

const ab = () => (
  <div>
    <h2>首页首页</h2>
  </div>
)


class Head extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li><Link to="/">首页</Link></li>
              <li><Link to="/Thumbnail">关于</Link></li>
              <li><Link to="/ab">关于</Link></li>

            </ul>
            <hr />
            <Route exact path="/" component={Thumbnail} />
            <Route path="/Thumbnail" component={Thumbnail} />
            <Route path="/ab" component={ab} />

          </div>
        </Router>
      </div>
    );
  }
}

export default Head;
