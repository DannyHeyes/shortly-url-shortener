import React from 'react';
import { btnPrimary, btnSecondary, btnThird } from './button.module.scss'

const PrimaryButton = (props) => {
    return ( 
        <button className={btnPrimary}>
            {props.children}
        </button>
     );
}
 
export default PrimaryButton;

export const SecondaryButton = (props) => {
    return ( 
        <button className={btnSecondary}>
            {props.children}
        </button>
     );
}

export const ThirdButton = (props) => {
    return( 
        <button className={btnThird}>
            {props.children}
        </button>
    );
}
 

