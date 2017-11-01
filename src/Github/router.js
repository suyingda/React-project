import React from "react";
import { HashRouter, Route } from "react-router-dom";


import Syd1 from "./views/Syd1"
import Content from "./views/Content"
  import Syd2 from "./views/Syd2"
import Syd3 from "./views/Syd3"

/* const Syd1 = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./views/Syd1').default)
    },'Syd1')
}

const Content = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./views/Content').default)
    },'Content')
}

const Syd2 = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./views/Syd2').default)
    },'Syd2')
}
const Syd3 = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./views/Syd3').default)
    },'Syd3')
} */
const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div>苏</div>,
        main: Syd1
    },
    {
        path: '/Syd1',
        exact: true,
        sidebar: () => <div>苏</div>,
        main: Syd1
    },
    {
        path: '/Content',
        sidebar: () => <div>英</div>,
        main: Content
    },
    {
        path: '/Syd2',
        sidebar: () => <div>大</div>,
        main:Syd2
    },
    {
        path: '/Syd3',
        sidebar: () => <div>大</div>,
        main: Syd3
    }
]



function Routes() {
    return (
        <HashRouter >
            <div>
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} exact={route.exact} component={route.main} />
                    
                ))}
                {/*   <Route exact path="/" component={Syd1}  ></Route>
                <Route path="/Syd1" component={Syd1}></Route>
                <Route path="/Content" component={Content}></Route>
                <Route path="/Syd2" component={Syd2}></Route> 
                <Route path="/Syd3/:id" component={Syd3}></Route>  */}
            </div>
        </HashRouter>

    )
}
export default Routes;