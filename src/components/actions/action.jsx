import React from 'react';
import  {ThirdButton}  from '../common/button/button';
import { actionDiv } from './action.module.scss';

const Action = () => {
    return ( 
        <div className={actionDiv}>
            <h1>Boost your links today</h1>
            <ThirdButton>
                Get Started
            </ThirdButton>
        </div>
     );
}
 
export default Action;