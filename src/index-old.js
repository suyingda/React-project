import React from 'react';
import { render } from 'react-dom';
import './index.css';

// import BasicExample from './Routera.js'
// import BasicExample from './views/App.js'
// import Home from './views/Home.js'
import BasicExample from './push.js'

/* import registerServiceWorker from './registerServiceWorker'; */

render(
    <div>

        <BasicExample />
    </div>,

    document.getElementById('root')
);
/* registerServiceWorker(); */
