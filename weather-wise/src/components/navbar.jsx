import { Link } from "react-router-dom";
import React from "react";
import Clock from "./clock";

function Navbar(){
  return ( 
<div className="navbar bg-base-100 text-white">
  <div className="flex-1">
    <Link className="btn btn-ghost text-xl"  to='/home'>What is bro cooking</Link> 
  </div>
  <div className="flex-none">
    
       <Clock></Clock> 
    <ul className="menu menu-horizontal px-1">
      <li><a>ola</a></li>
      <li>
        <details>
          <summary>
            Dropdown
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none">
            <Link to='/health'> AAAAOla</Link>
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
  );
}

export default Navbar;