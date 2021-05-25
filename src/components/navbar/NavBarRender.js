import React from 'react';
import MobileNavBar from './MobileNavBar';
import DesktopNavbar from './DesktopNavBar';

const window = require("global/window");

const NavBarRender = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 1024;
  
    React.useEffect(() => {
      window.addEventListener("resize", () => setWidth(window.innerWidth))
    }, [])

    return width > breakpoint ?  <DesktopNavbar/> : <MobileNavBar/> ;

}

export default NavBarRender;