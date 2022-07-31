import React from 'react';
import List from './List';
import {Link} from "react-router-dom";
function Home() {
  return (
    <div>
   
    <h1>React Albums</h1>
    <div class="col-md-12 text-center">
    <button type='button'  className='btn btn-outline-info'> <Link to={`/Addlist`} style={{textDecoration:"none"}} ><h4>Addlist</h4></Link></button><br></br>
    </div>
    <List></List>
    </div>
  )
}

export default Home;