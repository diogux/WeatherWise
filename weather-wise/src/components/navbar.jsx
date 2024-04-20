import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faCog, faTriangleExclamation, faFlag } from '@fortawesome/free-solid-svg-icons';
import Clock from './clock';
import './navbar.css';
import Navigation_Menu from './navigation_menu';
import Language_Menu from './language_menu';

function Navbar() { 
  return ( 
    <div className="navbar bg-base-100 text-white">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" to='/home'>WeatherWise</Link> 
        <Navigation_Menu></Navigation_Menu>
      </div>
  
      <div className="ticker flex-1">
        <p className='ticker-text'><FontAwesomeIcon icon={faTriangleExclamation}></FontAwesomeIcon>Warning: Severe coastal weather<FontAwesomeIcon icon={faTriangleExclamation}></FontAwesomeIcon></p>
      </div>
      <div className="flex-none">
        <Clock />
        <ul className="menu menu-horizontal px-4">
          <li><a><FontAwesomeIcon icon={faPencil}/></a></li>
          <li className='px-2'>
          <Language_Menu></Language_Menu>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
