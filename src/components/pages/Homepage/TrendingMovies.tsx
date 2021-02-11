//@ts-nocheck
import React,{useContext} from 'react'
import { useHistory } from 'react-router-dom';

import {Img} from '../../Shared/ImageElements'
import Card from '../../Card'
import CardBoard from '../../CardBoard'
import { MoviesContext } from '../../../contexts/MoviesContext';


const TrendingMovieCard = ({data}:any) => {

    

    let history = useHistory();
    const redirectToMoviePage = () => {
        history.push('/movie')
    }

    return (
        <div onClick={redirectToMoviePage}>
            <Card  width='auto' height='16rem' margin='1rem 0.5rem'>
                <Img as='img' src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} alt={data.title}></Img>
            </Card>
        </div>
    )
}


const TrendingMovies = () => {
    const {movies} = useContext(MoviesContext);
   movies.length= 12;
    return (
        <CardBoard>
        {movies.map((movie) => <TrendingMovieCard data={movie} key={movie.id}/>)};
    </CardBoard>
    )
}

export default TrendingMovies;