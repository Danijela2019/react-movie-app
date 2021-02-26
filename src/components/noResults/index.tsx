import React from 'react'
import {TitleWrapper } from './NoResultsElements';
import { Background } from '../shared/Background';
import {INoResultsProps} from '../../frontEndTypes'


const NoResults = (props: INoResultsProps) => {
    const {children, cover} = props
    return (
        <Background background={cover}>
            <TitleWrapper>
           {children}
            </TitleWrapper>
        </Background>
    )
}

export default NoResults;