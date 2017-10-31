import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const routes = [
    {
        path: '/',
        exact: true,
        // sidebar: () => <div>苏</div>,
        main: () => <h2>苏测试</h2>
    },
    {
        path: '/bubblegum',
        // sidebar: () => <div>英</div>,
        main: () => <h2>英测试</h2>
    },
    {
        path: '/shoelaces',
        // sidebar: () => <div>大</div>,
        main: () => <h2>大测试</h2>
    }
]



const SidebarExample = ({match}) => (
    <Router>
        <div >
            <div >
                <ul >
             
                <li><Link to={`/${match}`}>大</Link></li>
                <li><Link to='/bubblegum'>大123</Link></li>
                   {/*  <li><Link to={`${match.url}/rendering`}>苏</Link></li> */}
                 {/*    <li><Link to="/bubblegum">英</Link></li>
                    <li><Link to="/shoelaces">大</Link></li> */}
                </ul>

            </div>
            <div  >
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} exact={route.exact} component={route.main} />
                ))}
            </div>
        </div>
    </Router>
)

export default SidebarExample