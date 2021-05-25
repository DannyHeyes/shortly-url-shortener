import React from 'react';
import { btnPrimary, btnSecondary } from './button.module.scss'

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
 
