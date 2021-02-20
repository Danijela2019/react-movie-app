import React from 'react'
import { NoResultsBackground,TitleWrapper } from './NoResultsElements';

const NoResults = (props:any) => {
    return (
        <NoResultsBackground>
            <TitleWrapper>
           {props.children}
            </TitleWrapper>
        </NoResultsBackground>
    )
}

export default NoResults;