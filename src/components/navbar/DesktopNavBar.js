import React from 'react';

import logo from '../../assets/logo.svg';
import { SecondaryButton } from '../common/button/button';

import { wrapper, logoImg, rightDiv} from './desktopNavbar.module.scss';

const DesktopNavbar = () => {
    return ( 
        <div className={wrapper}>
            <div>
                <img className={logoImg} src={logo} alt="" />
            </div>
         
                <div>
                    <ul>
                        <li>Featuring</li>
                        <li>Pricing</li>
                        <li>Resources</li>
                    </ul>
                </div>
               
                <div className={rightDiv}>
                    <ul>
                        <li>Login</li>
                        <li>
                            <SecondaryButton>
                                Sign Up
                            </SecondaryButton>
                        </li>
                    </ul>
                </div>
         
            
        </div>
     );
}
 
export default DesktopNavbar;