import React from 'react';
import { ICardProps } from '../../types';
import { CardContainer } from './CardElements';


const Card = ({children, width, height,margin}:ICardProps) => {
    return (
        <CardContainer width={width} height={height} margin={margin}>
            {children}
        </CardContainer>
    )
}

export default Card;