import React from "react";
import Bottom from "./Bottom.js";
import Top from "./Top.js";
class App extends React.Component{
    render(){
        return (
            <div  >
                <Top/>   
                <br/><br/><br/>
                {this.props.children}
                <Bottom  />
            </div>
        )
    }
}

export default App;