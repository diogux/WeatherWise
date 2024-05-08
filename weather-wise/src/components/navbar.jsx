import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTriangleExclamation, faCloud, faCloudRain } from '@fortawesome/free-solid-svg-icons';
import Clock from './clock';
import './navbar.css';
import Navigation_Menu from './navigation_menu';
import Language_Menu from './language_menu';
import Settings_Menu from './settings_menu';  
import AdviceModal from './advice_modal'; // Make sure the path is correct

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
        <Navigation_Menu></Navigation_Menu>
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
      <div className="flex-none px-7 justify-center items-center">
        <Clock></Clock><div className="px-2"></div>
        <Language_Menu></Language_Menu>
        <Settings_Menu></Settings_Menu>
      </div>
      {/* Include Modal in Navbar */}
      <AdviceModal />
    </div>
  );
}

export default Navbar;
