
import React from 'react'

import { MovieBackground, MovieImage, MovieTitleContainer,MovieDataColumn} from './MoviepageElements'
import {Title} from '../../shared/TextElements'
import joker from './../../../assets/movies/joker.jpg'
import MovieInfoCard from './MovieInfoCard';


const MoviePage = () => {
    return (
        <React.Fragment>
            <MovieBackground cover={joker}>
                <MovieImage as='img' src={joker} width="200px" height="auto" alt="Joker"/>
                <MovieTitleContainer>
                    <Title>Joker</Title>
                </MovieTitleContainer>
            </MovieBackground>
            <MovieInfoCard/>
        </React.Fragment>
    )
}

export default MoviePage;