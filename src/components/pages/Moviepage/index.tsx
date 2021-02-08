//@ts-nocheck
import React from 'react'

import { MovieBackground, MovieImage, MovieTitleContainer,MovieDataColumn} from './MoviepageComponents'
import {Title} from '../../Shared/TextElements'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import joker from './../../../assets/movies/joker.jpg'
import MovieInfoCard from './MovieInfoCard';


export const MoviePage = () => {
    return (
        <React.Fragment>
            <MovieBackground cover={joker}>
                <Navbar/>
                <MovieImage as='img' src={joker} width="200px" height="auto" alt="Joker"/>
                <MovieTitleContainer>
                    <Title>Joker</Title>
                </MovieTitleContainer>
            </MovieBackground>
            <MovieInfoCard/>
            <Footer/>
        </React.Fragment>
    )
}
