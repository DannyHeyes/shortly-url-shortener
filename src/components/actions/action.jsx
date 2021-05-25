import React from 'react';
import PrimaryButton from '../common/button/button';

import { actionDiv } from './action.module.scss';
const Action = () => {
    return ( 
        <div className={actionDiv}>
            <h1>Boost your links today</h1>
            <PrimaryButton>
                Get Started
            </PrimaryButton>
        </div>
     );
}
 
export default Action;