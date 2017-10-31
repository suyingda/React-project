import React, { Component } from 'react';

 
import Head from './Head.js';
import Bottom from './Bottom.js';
import Content from './Content.js';
import Top from './Top.js';
class App extends Component {
 render() {
   return (
    <div>
        <Head/>
        <Content/>
        <Bottom/>
        <Top/>
    </div>
   );
 }
}

export default App;
