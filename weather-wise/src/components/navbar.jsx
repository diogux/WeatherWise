import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faCog, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import Clock from './clock';
import './navbar.css';

function Navbar() {
  return ( 
    <div className="navbar bg-base-100 text-white w-full">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" to='/home'>WeatherWise</Link> 
      </div>
      <div className="ticker flex-1">
        <p className='ticker-text'><FontAwesomeIcon icon={faTriangleExclamation}></FontAwesomeIcon>Warning: Severe coastal weather<FontAwesomeIcon icon={faTriangleExclamation}></FontAwesomeIcon></p>
      </div>
      <div className="flex-none">
        <Clock />
        <ul className="menu menu-horizontal px-1">
          <li><a><FontAwesomeIcon icon={faPencil} /></a></li>
          <li>
            <details>
              <summary>
                <FontAwesomeIcon icon={faCog} />
              </summary>
              <ul className="p-3 bg-base-100 rounded-t-none">
                <li><Link to='/health'>Health</Link></li>
                <li><a>FAQ</a></li>
                <li><a>About us</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
