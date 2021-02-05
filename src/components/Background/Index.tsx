//@ts-nocheck
import React from 'react'
import { CoverContainer,CoverContainerWrapper } from './BackgroundElements'



const Background = ({children, cover}) => {
    return (
        <CoverContainerWrapper> 
            <CoverContainer cover={cover}>
                {children}
            </CoverContainer>
        </CoverContainerWrapper>
    )
}

export default Background;