import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import menu from '../../assets/list.svg'

import { wrapper, logoImg, rightDiv, navLinksActive, burger } from './mobileNavbar.module.scss';

const MobileNavBar = () => {
    const [isActive, setActive] = useState(false);

    const showNavbar = () => {
        setActive(!isActive);
    };


    return ( 
        <div className={wrapper}>
            <div>
                <img className={logoImg} src={logo} alt="" />
            </div>
            <div className={isActive===true ? navLinksActive : null}>
                <div>
                    <ul>
                        <li>Featuring</li>
                        <li>Pricing</li>
                        <li>Resources</li>
                    </ul>
                </div>
                <hr />
                <div className={rightDiv}>
                    <ul>
                        <li>Login</li>
                        <li>
                            <button>
                                Sign Up
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={burger} onClick={showNavbar}>
                <img src={menu} alt="" />
            </div>
            
        </div>
     );
}
 
export default MobileNavBar;