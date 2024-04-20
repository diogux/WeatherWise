import * as React from "react";
import { a } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenua,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";


function language_menu () {
  return (
    <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger><FontAwesomeIcon icon={faFlag}></FontAwesomeIcon></NavigationMenuTrigger>
      <NavigationMenuContent>
        <a className={navigationMenuTriggerStyle()} >EN</a> 
        <a className={navigationMenuTriggerStyle()} >PT</a>
        <a className={navigationMenuTriggerStyle()} >FR</a>
        <a className={navigationMenuTriggerStyle()} >ES</a>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

  );
}   

export default language_menu;

