import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTriangleExclamation, faCloud, faCloudRain } from '@fortawesome/free-solid-svg-icons';
import Clock from './clock';
import './navbar.css'; 
import AdviceModal from './advice_modal'; // Make sure the path is correct
import { navigationMenuTriggerStyle,} from "@/components/ui/navigation-menu";
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';

function Navbar() { 
  const openModal = () => {
    const modal = document.getElementById('my_modal_2');
    modal.showModal();
  };

  return ( 
    <div className="navbar bg-black/30 text-white">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" to='/home'>
          <FontAwesomeIcon icon={faCloud}></FontAwesomeIcon>WeatherWise
        </Link> 
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost m-1">Explore</div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-22">
                <Link className={navigationMenuTriggerStyle()} to="/Forecast">Forecast</Link>
                <Link className={navigationMenuTriggerStyle()} to="/Health">Health</Link>
                <Link className={navigationMenuTriggerStyle()} to="/Crops">Crops</Link>
                <Link className={navigationMenuTriggerStyle()} to="/Travel">Travel</Link>
                <Link className={navigationMenuTriggerStyle()} to="/Storms">Storms</Link>
          </ul>
        </div>
        {/* Button to open Advice Modal */}
        <button className="btn btn-ghost ml-2" onClick={openModal}> Daily Advice
        </button>
      </div>
  
      <div className="ticker flex-1">
        <p className='ticker-text'>
          <FontAwesomeIcon icon={faTriangleExclamation}></FontAwesomeIcon>
          Warning: Severe coastal weather
          <FontAwesomeIcon icon={faTriangleExclamation}></FontAwesomeIcon>
        </p>
      </div>
      <div className="flex-none px-7 justify-center items-center mr-5">
        <Clock></Clock><div className="px-2"></div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost m-1"><FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon></div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-22">
            <Link className={navigationMenuTriggerStyle()} >EN</Link> 
            <Link className={navigationMenuTriggerStyle()} >PT</Link>
            <Link className={navigationMenuTriggerStyle()} >FR</Link>
            <Link className={navigationMenuTriggerStyle()} >ES</Link>
          </ul>
        </div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost m-1"><FontAwesomeIcon icon={faCog}></FontAwesomeIcon></div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 mr-2 rounded-box w-22">
            <Link className={navigationMenuTriggerStyle()} >Help</Link> 
            <Link className={navigationMenuTriggerStyle()} >Contacts</Link>
            <Link to={'/AboutUs'} className={navigationMenuTriggerStyle()} >About Us</Link>
          </ul>
        </div>
      </div>
      {/* Include Modal in Navbar */}
      <AdviceModal />
    </div>
  );
}

export default Navbar;
