//@ts-nocheck
import React,{useContext} from 'react'
import { useHistory } from 'react-router-dom';

import {Img} from '../../shared/ImageElements'
import Card from '../../card'
import  {MoviesContext}  from '../../../contexts/MoviesContext';
import {ScrollHorizontally} from '../../shared/ScrollHorizontally'
import imgPlaceholder from '../../../assets/default.jpg'
import { PopularNumber, PopularSpan } from './HomepageElements';


const TrendingMovieCard = ({data}:any) => {
    const {getSingleMovieData} = useContext(MoviesContext);
    let history = useHistory();
    const redirectToMoviePage = () => {
        getSingleMovieData(data)
        history.push('/movie')
    }
    
    return (
        <div onClick={redirectToMoviePage}>
            <Card  width='8rem' hight='10rem' margin='1rem 0.5rem'>
                <PopularSpan>
                <PopularNumber>{data.number}</PopularNumber>
                </PopularSpan>
                <Img as='img' src={data.picture  || imgPlaceholder} alt={data.title}></Img>
            </Card>
        </div>
    )
}


const TrendingMovies = () => {
    const {popularMovies} = useContext(MoviesContext);
     const copyPopularMovies= popularMovies.slice()
    copyPopularMovies.map((item,index)=> item.number= index+1)
    return (
        <ScrollHorizontally>
        {copyPopularMovies.map((movie) => <TrendingMovieCard data={movie} key={movie.id} />)};
    </ScrollHorizontally>
    )
}

export default TrendingMovies;