import React from "react";
import Bottom from "./Bottom.js";
import Top from "./Top.js";
class App extends React.Component{
    render(){
        return (
            <div  >
               
                <Top/>   
                <div className="con">
                {this.props.children}
                </div>
               
                <Bottom  title="biaoti" />
            </div>
        )
    }
}

export default App;