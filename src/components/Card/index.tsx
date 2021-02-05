import React from 'react';
import { CardContainer } from './CardElements';


const Card = (props: any) => {
    return (
        <CardContainer>
            {props.children}
        </CardContainer>
    )
}

export default Card;