import React, { Component } from 'react';



class Top extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li><Link to="/">首页</Link></li>
              <li><Link to="/Head">关于</Link></li>
             
            </ul>
            <hr />
            <Route exact path="/" component={Head} />
            <Route path="/Head" component={Content} />
            
          </div>
        </Router>
      </div>
    );
  }
}

export default Top;
