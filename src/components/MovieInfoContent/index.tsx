import React from 'react'
import { SiImdb } from 'react-icons/si';

import { IMovieData } from '../../types';
import Icon from '../icon';
import { MovieContentWrapper, MovieDataColumn, MovieInfo,Resume,InfoWrapper } from './MovieInfoElements';

const MovieInfoContent = ({data}:IMovieData) => {
    return (
        <MovieContentWrapper>
        <MovieDataColumn>
            <InfoWrapper>
                <Icon color='var(--color-text)' size='30px'>< SiImdb/></Icon>
                <MovieInfo>{data.rating} | {data.date}</MovieInfo>
            
            <h2>{data.title}</h2>
            </InfoWrapper>
                <Resume>{data.resume}</Resume>
            
        </MovieDataColumn>
    </MovieContentWrapper>
    )
}


export default MovieInfoContent;