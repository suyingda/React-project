 import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Head extends Component {
    constructor(props){
        super(props);
        this.links=[
            {url:"/",text:"首页"},
            {url:"/Content",text:"我的"},
            {url:"/Syd2",text:"底部"},
            {url:"/Syd3/2",text:"屋顶不"},
        ];
    }

 render() {
    var items=this.links.map(function(lk,i){
        return(<Link key={i}  to={lk.url}>{lk.text}</Link>);
               })
   return (
    <div>
        <ul className="Top">
            <li>
            {items}
            </li>  
        </ul>
        
    </div>
   );
 }
}

export default Head;

