//@ts-nocheck
import React, { useContext } from 'react'

import { MovieBackground, MovieImage, MovieTitleContainer} from './MoviepageElements'
import {Title} from '../../shared/TextElements'
import MovieInfoCard from './MovieInfoCard';
import {MoviesContext} from '../../../contexts/MoviesContext';


const MoviePage = () => {
    //@ts-ignore
    const {singleMovie} = useContext(MoviesContext)

   

    return (
        <React.Fragment>
            <MovieBackground cover={singleMovie.picture}>
                <MovieImage as='img' src={singleMovie.picture} width="200px" height="auto" alt="Joker"/>
                <MovieTitleContainer>
                    <Title>{singleMovie.title}</Title>
                </MovieTitleContainer>
            </MovieBackground>
            <MovieInfoCard/>
        </React.Fragment>
    )
}

export default MoviePage;