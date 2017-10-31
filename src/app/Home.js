 

  import React, { Component } from 'react';
 
 
 class Home extends Component {
   render() {
     return (
        <div>
        <Link to='/gallery'>Visit the Gallery</Link>
        <h2>Featured Images</h2>
        <ul>
          <li><Link to='/img/2'>Tomato</Link></li>
          <li><Link to='/img/4'>Crimson</Link></li>
        </ul>
      </div>
     );
   }
 }
 
 export default Home;
 