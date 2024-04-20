import * as React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

function settings_menu () {
  return (
  <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger><FontAwesomeIcon icon={faCog}></FontAwesomeIcon></NavigationMenuTrigger>
      <NavigationMenuContent>
        <Link className={navigationMenuTriggerStyle()} >Help</Link> 
        <Link className={navigationMenuTriggerStyle()} >Contacts</Link>
        <Link className={navigationMenuTriggerStyle()} >About Us</Link>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

  );
}   

export default settings_menu;

