import React from 'react'
import { SiImdb } from 'react-icons/si';
import Icon from '../Icon';
import { CenterElements } from '../Shared/CenterElements';
import { MovieContentWrapper, MovieDataColumn, MovieInfo } from './MovieInfoElements';

const MovieInfoContent = ({data}:any) => {
    return (
        <MovieContentWrapper>
        <MovieDataColumn>
            <CenterElements>
            <Icon color='var(--color-text)' size='30px'>< SiImdb/></Icon>
            <MovieInfo>|{data.vote_average} | {data.release_date}</MovieInfo>
            </CenterElements>
            <h3>{data.title}</h3>
            <p>{data.overview}</p>
        </MovieDataColumn>
    </MovieContentWrapper>
    )
}


export default MovieInfoContent;