import React, { Component } from 'react';
import './index.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            x: 0,
            y: 0
        }

    }
    fn(ev) {
      var disX=ev.pageX - this.state.x;
      var disY=ev.pageY - this.state.y;
      
        document.onmousemove =  (ev) =>{
            this.setState({
                x: ev.pageX - disX,
                y: ev.pageY - disY,
            })  
        }
        document.onmouseup=()=>{
            document.onmousemove=null;
            document.onmouseup=null;
        }

    }
    render() {
        return (
            <div className="tuozhuai" ref='aa' onMouseDown={this.fn.bind(this)} style={{ left: this.state.x + 'px', top: this.state.y + 'px' }}>
               X:{this.state.x}<br/>
              Y:{this.state.y}
    </div>
        );
    }
}

export default App;
