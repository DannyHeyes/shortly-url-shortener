import React from 'react';

import { card } from './card.module.scss';

const CardComponent = (props) => {

    return ( 
        <div className={card}>
            {props.children}
        </div>
     );
}
 
export default CardComponent;