import React from 'react'
import { SiImdb } from 'react-icons/si';
import Icon from '../Icon';
import { CenterElements } from '../Shared/CenterElements';
import { MovieContentWrapper, MovieDataColumn, MovieInfo } from './MovieInfoElements';

const MovieInfoContent = () => {
    return (
        <MovieContentWrapper>
        <MovieDataColumn>
            <CenterElements>
            <Icon color='var(--color-text)' size='30px'>< SiImdb/></Icon>
            <MovieInfo>7.3 | type | 2020 | 2h 30min</MovieInfo>
            </CenterElements>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, quidem? Quasi similique vitae quam laboriosam?</p>
        </MovieDataColumn>
        <MovieDataColumn>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <p>Lorem ipsum dolor sit amet consectetur</p>
        </MovieDataColumn>
        
</MovieContentWrapper>
    )
}


export default MovieInfoContent;