import React, { Component } from 'react';

import Head from './components/Head.js';
import Progress from './components/progress.js';

class Root extends Component {
 
    
    render() {
        return (
            <div>
                <Head />
                <Progress progress="1">
                   
                </Progress>
            </div>
        );
    }
}

export default Root;
