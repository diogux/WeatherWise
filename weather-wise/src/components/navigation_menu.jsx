import * as React from "react";
import { Link } from 'react-router-dom';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";


function navigation_menu () {
  return (
    <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
      <NavigationMenuContent>
        <Link className={navigationMenuTriggerStyle()} to="/Forecast">Forecast</Link>
        <Link className={navigationMenuTriggerStyle()} to="/Health">Health</Link>
        <Link className={navigationMenuTriggerStyle()} to="/Crops">Crops</Link>
        <Link className={navigationMenuTriggerStyle()} to="/Travel">Travel</Link>
        <Link className={navigationMenuTriggerStyle()} to="/Storms">Storms</Link>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

  );
}   

export default navigation_menu;

