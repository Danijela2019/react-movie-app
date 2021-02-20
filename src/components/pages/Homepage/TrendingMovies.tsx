//@ts-nocheck
import React,{useContext} from 'react'
import { useHistory } from 'react-router-dom';

import {Img} from '../../shared/ImageElements'
import Card from '../../card'
import  {MoviesContext}  from '../../../contexts/MoviesContext';
import { IMovieData } from '../../../frontEndTypes';
import {ScrollHorizontally, ScrollHorizontaly} from '../../shared/ScrollHorizontally'
import imgPlaceholder from '../../../assets/default.jpg'


const TrendingMovieCard = ({data}:IMovieData) => {
    const {getSingleMovieData} = useContext(MoviesContext);
    let history = useHistory();
    const redirectToMoviePage = () => {
        getSingleMovieData(data)
        history.push('/movie')
    }

    return (
        <div onClick={redirectToMoviePage}>
            <Card  width='12rem' hight='16rem' margin='1rem 0.5rem'>
                <Img as='img' src={data.picture  || imgPlaceholder} alt={data.title}></Img>
            </Card>
        </div>
    )
}


const TrendingMovies = () => {
    const {popularMovies} = useContext(MoviesContext);
    return (
        <ScrollHorizontally>
        {popularMovies.map((movie) => <TrendingMovieCard data={movie} key={movie.id}/>)};
    </ScrollHorizontally>
    )
}

export default TrendingMovies;