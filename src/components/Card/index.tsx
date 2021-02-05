// @ts-nocheck
import React from 'react';
import { CardContainer } from './CardElements';


const Card = ({children, width, height,margin}) => {
    return (
        <CardContainer width={width} height={height} margin={margin}>
            {children}
        </CardContainer>
    )
}

export default Card;