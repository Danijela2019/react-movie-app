//@ts-nocheck
import React from 'react'
import {TitleWrapper } from './NoResultsElements';
import { Background } from '../shared/Background';

const NoResults = (props:any) => {
    return (
        <Background background={props.cover}>
            <TitleWrapper>
           {props.children}
            </TitleWrapper>
        </Background>
    )
}

export default NoResults;