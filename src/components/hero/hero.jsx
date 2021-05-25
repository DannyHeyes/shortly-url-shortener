import React from 'react';
import illustration from '../../assets/illustration-working.svg';
import PrimaryButton from '../common/button/button';
import { wrapper, imgDiv, contentDiv } from './hero.module.scss'

const HeroSection = () => {
    return ( 
        <div className={wrapper}>
            <div className={imgDiv}>
                <img src={illustration} alt="Illustration of human working at a desk. " />
            </div>
            <div className={contentDiv}>
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights on how your links are performing. </p>
                <PrimaryButton>
                    Get Started
                </PrimaryButton>
            </div>
        </div>
     );
}
 
export default HeroSection;