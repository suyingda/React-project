import React from "react";
import {HashRouter,Route} from "react-router-dom";

 
import  Syd1 from "./views/Syd1"
import  Content from "./views/Content"
import  Syd2 from "./views/Syd2"
import  Syd3 from "./views/Syd3"
function Routes(){
   return (
       <HashRouter>
            <div>
                <Route exact path="/" component={Syd1}></Route>
                <Route path="/Syd1" component={Syd1}></Route>
                <Route path="/Content" component={Content}></Route>
                <Route path="/Syd2" component={Syd2}></Route> 
                <Route path="/Syd3/:id" component={Syd3}></Route> 
            </div>
        </HashRouter>
   )
}
export default Routes;