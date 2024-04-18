import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faCog, faTriangleExclamation, faFlag } from '@fortawesome/free-solid-svg-icons';
import Clock from './clock';
import './navbar.css';

function Navbar() {
  return ( 
    <div className="navbar bg-base-100 text-white">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" to='/home'>WeatherWise</Link> 
        <ul className="menu menu-horizontal px-4">
          <li className='px-2'>
            <details>
              <summary className=''>
                Explore
              </summary>
              <ul className="bg-base-100 rounded-t-none">
                <li><Link to='/Forecast'>Forecast</Link></li>
                <li><Link to='/Health'>Health</Link></li>
                <li><Link to='/Crops'>Crops</Link></li>
                <li><Link to='/Travel'>Travel</Link></li>
                <li><Link to='/Storms'>Storms</Link></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
  
      <div className="ticker flex-1">
        <p className='ticker-text'><FontAwesomeIcon icon={faTriangleExclamation}></FontAwesomeIcon>Warning: Severe coastal weather<FontAwesomeIcon icon={faTriangleExclamation}></FontAwesomeIcon></p>
      </div>
      <div className="flex-none">
        <Clock />
        <ul className="menu menu-horizontal px-4">
          <li><a><FontAwesomeIcon icon={faPencil} /></a></li>
          <li className='px-2'>
            <details>
              <summary>
                <FontAwesomeIcon icon={faFlag} />
              </summary>
              <ul className="bg-base-100 rounded-t-none">
                <li><a>EN</a></li>
                <li><a>PT</a></li>
                <li><a>FR</a></li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>
                <FontAwesomeIcon icon={faCog} />
              </summary>
              <ul className="p-1 bg-base-100 rounded-t-none">
                <li><a>Help</a></li>
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
