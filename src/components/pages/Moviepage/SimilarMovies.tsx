//@ts-nocheck
import React,{useContext,useState, useEffect} from 'react'

import {Img} from '../../shared/ImageElements'
import Card from '../../card'
import  {MoviesContext}  from '../../../contexts/MoviesContext';
import { IMovieData, Movie } from '../../../frontEndTypes';
import {ScrollHorizontally} from '../../shared/ScrollHorizontally'
import {Title} from '../../shared/TextElements'
import imgPlaceholder from '../../../assets/default.jpg'
import { getSimilarMovies } from '../../../util/contextFunctions';

const SimilarMovieCard = ({data}:IMovieData) => {
    const {getSingleMovieData} = useContext(MoviesContext);
    return (
        <div onClick={() =>{getSingleMovieData(data)}}>
            <Card  width='10rem' height='auto' margin='1rem 0.5rem'>
                <Img as='img' src={data.picture || imgPlaceholder} alt={data.title}></Img>
            </Card>
        </div>
    )
}

const SimilarMovies = () => {
    const {singleMovie} = useContext(MoviesContext)
    const [similarMovies, setSimilarMovies] = useState([])

  useEffect(() => {
        getSimilarMovies(singleMovie.id)
        .then((results)=> setSimilarMovies(results))
        }, [singleMovie.id]);

  return (
      <React.Fragment>
        {similarMovies.length > 0 && <Title>You might also like</Title>}
          <ScrollHorizontally>
            {similarMovies.map((movie:Movie) => <SimilarMovieCard data={movie} key={movie.id}/>)};
          </ScrollHorizontally>
      </React.Fragment>
    )
}


export default SimilarMovies;