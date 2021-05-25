import React from 'react';
import logo from '../../assets/logo.svg'
import facebook from '../../assets/icons/icon-facebook.svg';
import twitter from '../../assets/icons/icon-twitter.svg';
import pinterest from '../../assets/icons/icon-pinterest.svg'
import instagram from '../../assets/icons/icon-instagram.svg'

import { footerWrapper, logoDiv, features, resources, company, socials } from './footer.module.scss';

const Footer = () => {
    return ( 
        <div className={footerWrapper}>
            <div className={logoDiv}>
                <img src={logo} alt="" />
            </div>
            <div className={features}>
                <h5>Features</h5>
                <ul>
                    <li>Link Shortening</li>
                    <li>Branded Links</li>
                    <li>Analytics</li>
                </ul>
            </div>
            <div className={resources}>
                <h5>Resources</h5>
                <ul>
                    <li>Blog</li>
                    <li>Developers</li>
                    <li>Support</li>
                </ul>
            </div>
            <div className={company}>
                <h5>Company</h5>
                <ul>
                    <li>About</li>
                    <li>Our Team</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className={socials}>
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={pinterest} alt="" />
                <img src={instagram} alt="" />
            </div>
        </div>
     );
}
 
export default Footer;