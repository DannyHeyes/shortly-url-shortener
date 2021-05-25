import React from 'react';
import MobileNavBar from './MobileNavBar';
import DesktopNavbar from './DesktopNavBar';

const window = require("global/window");

const NavBarRender = () => {
    const [isDesktop, setDesktop] = React.useState(window.innerWidth > 1023)
  	
    const updateNavBar = () => {
      setDesktop(window.innerWidth > 1023);
    };

    React.useEffect(() => {
      window.addEventListener("resize", updateNavBar);
      return () => window.removeEventListener("resize", updateNavBar)
    });

    return (
      (isDesktop) ? <DesktopNavbar/> : <MobileNavBar/>
    )
}

export default NavBarRender;