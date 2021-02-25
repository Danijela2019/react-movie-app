//@ts-nocheck
import React,{useContext,useState, useEffect} from 'react'

import {Img} from '../../shared/ImageElements'
import Card from '../../card'
import  {MoviesContext}  from '../../../contexts/MoviesContext';
import { IMovieData } from '../../../frontEndTypes';
import {ScrollHorizontally} from '../../shared/ScrollHorizontally'
import {Title} from '../../shared/TextElements'
import imgPlaceholder from '../../../assets/default.jpg'

const SimilarMovieCard = ({data}:IMovieData) => {
    const {getSingleMovieData} = useContext(MoviesContext);
    return (
        <div onClick={() =>{getSingleMovieData(data)}}>
            <Card  width='12rem' hight='16rem' margin='1rem 0.5rem'>
                <Img as='img' src={data.picture || imgPlaceholder} alt={data.title}></Img>
            </Card>
        </div>
    )
}

const SimilarMovies = () => {
    const {singleMovie} = useContext(MoviesContext)
    const [similarMovies, setSimilarMovies] = useState([])

    const baseUrl = "https://api.themoviedb.org/3";
    const posterBaseUrl = "https://image.tmdb.org/t/p/w300";
    const apiKey = process.env.REACT_APP_API_KEY;
    
    
    useEffect(() => {
        const similarUrl = `${baseUrl}/movie/${singleMovie.id}/recommendations?api_key=${apiKey}&language=en-US&page=1`;
            return fetch(similarUrl)
              .then((res) => res.json())
              .then((response) => mapData(response.results))
                .then(data => {
            setSimilarMovies(data)
        })
          .catch((_) => setSimilarMovies([]));
        }, [singleMovie.id]);
        const mapData = (res:any) => {
            return res.map((movie:IMovie) => {
              const {
                id,
                title,
                vote_average,
                overview,
                poster_path,
                release_date,
              } = movie;
          
              return {
                id,
                title,
                date: release_date,
                rating: vote_average,
                resume: overview,
                picture: poster_path ? `${posterBaseUrl}${poster_path}` : undefined,
              };
            });
          }
        
    return (
      <React.Fragment>
        {similarMovies.length > 0 && <Title>You might also like</Title>}
          <ScrollHorizontally>
            {similarMovies.map((movie) => <SimilarMovieCard data={movie} key={movie.id}/>)};
          </ScrollHorizontally>
      </React.Fragment>
    )
}


export default SimilarMovies;