import React from 'react'

import { ICardBoardProps } from '../../types';
import {CardsWrapper} from './CardBoardElements'

const CardBoard = (props:ICardBoardProps) => {
    return (
        <CardsWrapper>
            {props.children}
        </CardsWrapper>
    )
}

export default CardBoard;
 