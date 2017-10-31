
  import React from 'react';
  import Home from './Home.js'

  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'

  
class ModalSwitch extends React.Component {
    
      previousLocation = this.props.location
    
      componentWillUpdate(nextProps) {
        const { location } = this.props
        // set previousLocation if props.location is not modal
        if (
          nextProps.history.action !== 'POP' &&
          (!location.state || !location.state.modal)
        ) {
          this.previousLocation = this.props.location
        }
      }
    
      render() {
        const { location } = this.props
        const isModal = !!(
          location.state &&
          location.state.modal &&
          this.previousLocation !== location // not initial render
        )
        return (
          <div>
            123
            <Switch location={isModal ? this.previousLocation : location}>
              <Route exact path='/' component={Home}/>
      
            </Switch>
           
          </div>
        )
      }
    }
    export default ModalSwitch;