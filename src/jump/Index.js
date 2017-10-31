/* import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

class App extends Component {
    handleSubmit( ) {
        this.context.router.push('/aurl')
       
      }
    render() {
        return (
            <div>
                <button onClick={this.handleSubmit.bind(this)}>按钮</button>
            </div>
        );
    }
}

export default App; */

import React, { Component } from 'react';


import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const ParamsExample = () => (
    <Router>
        <div>
            <ul>
                <li><Link to='/'>首页</Link></li>
                <li><Link to='/page1'>分页1</Link></li>
                <li><Link to='/page2'>分页2</Link></li>
            </ul>
            <Route exact path='/:diaoni' component={Child} />
        </div>
    </Router>
)

const Child = ({ match }) => (
    <div>
        <div>{match.params.diaoni}</div>
        {
            console.log(match)
        }
      
    </div>
   
  )
export default ParamsExample;
