//@ ts-nocheck
import React from 'react'

import {Img} from '../../Shared/ImageElements'
import Card from '../../Card'
import movieData from '../../../data/movies';
import CardBoard from '../../CardBoard'


const TrendingMovieCard = (props:any) => {
    return (
        <Card width='auto' height='16rem' margin='1rem 0.5rem'>
             <Img as='img' src={props.data.src} alt={props.data.alt}></Img>
        </Card>
    )
};

const movieCards = movieData.map((data, index) => <TrendingMovieCard data={data} key={index} />);


const TrendingMovies = () => {
    return (
        <CardBoard>
        {movieCards}
    </CardBoard>
    )
}



export default TrendingMovies;