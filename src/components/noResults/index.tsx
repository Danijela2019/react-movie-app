//@ts-nocheck
import React from 'react'
import {TitleWrapper } from './NoResultsElements';
import cover  from '../../assets/shrek.jpg'
import { Background } from '../shared/Background';

const NoResults = (props:any) => {
    return (
        <Background background={cover}>
            <TitleWrapper>
           {props.children}
            </TitleWrapper>
        </Background>
    )
}

export default NoResults;