import React from 'react'
import {CardsWrapper} from './CardBoardElements'

const CardBoard = (props:any) => {
    return (
        <CardsWrapper>
            {props.children}
        </CardsWrapper>
    )
}

export default CardBoard;
 