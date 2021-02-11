//@ts-nocheck
import React from 'react'
import { useHistory } from 'react-router-dom';

import {Img} from '../../Shared/ImageElements'
import Card from '../../Card'
import CardBoard from '../../CardBoard'


const TrendingMovieCard = (props:any) => {

    let history = useHistory();
    const redirectToMoviePage = () => {
        history.push('/movie')
    }

    return (
        <div onClick={redirectToMoviePage}>
            <Card  width='auto' height='16rem' margin='1rem 0.5rem'>
                <Img as='img' src={`https://image.tmdb.org/t/p/w200/${props.data.poster_path}`} alt={props.data.title}></Img>
            </Card>
        </div>
    )
}


const TrendingMovies = (props) => {
   props.movies.length= 12;
    return (
        <CardBoard>
        {props.movies.map((movie) => <TrendingMovieCard data={movie} key={movie.id}/>)};
    </CardBoard>
    )
}

export default TrendingMovies;