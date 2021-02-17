//@ts-nocheck
import React,{useContext} from 'react'
import { useHistory } from 'react-router-dom';

import {Img} from '../../shared/ImageElements'
import Card from '../../card'
import CardBoard from '../../cardBoard'
import  {MoviesContext}  from '../../../contexts/MoviesContext';
import { IMovieData } from '../../../types';

const TrendingMovieCard = ({data}:IMovieData) => {
    const {getSingleMovieData} = useContext(MoviesContext);
    let history = useHistory();
    const redirectToMoviePage = () => {
        getSingleMovieData(data)
        history.push('/movie')
    }


    return (
        <div onClick={redirectToMoviePage}>
            <Card  width='auto' height='16rem' margin='1rem 0.5rem'>
                <Img as='img' src={data.picture} alt={data.title}></Img>
            </Card>
        </div>
    )
}


const TrendingMovies = () => {
    const {popularMovies} = useContext(MoviesContext);
    const trending = [...popularMovies].slice(0,12)
    return (
        <CardBoard>
        {trending.map((movie) => <TrendingMovieCard data={movie} key={movie.id}/>)};
    </CardBoard>
    )
}

export default TrendingMovies;