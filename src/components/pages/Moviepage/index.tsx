//@ts-nocheck
import React, { useContext,useEffect} from 'react'
import { useLocation } from "react-router-dom";

import { MovieBackground, MovieImage, MovieTitleContainer} from './MoviepageElements'
import {Title} from '../../shared/TextElements'
import MovieInfoCard from './MovieInfoCard';
import {MoviesContext} from '../../../contexts/MoviesContext';

const MoviePage = () => {
    const {singleMovie} = useContext(MoviesContext)
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [location]); 

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