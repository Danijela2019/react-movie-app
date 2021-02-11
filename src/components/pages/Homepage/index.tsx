//@ts-nocheck
import React,{useState, useEffect} from 'react'
import axios from 'axios'

import {Title} from '../../Shared/TextElements'
import CardBoard from '../../CardBoard'
import Button from '../../Button'
import cover from '../../../assets/it.png'
import InfoCardsBoard from './InfoCardsBoard'
import TrendingMovies from './TrendingMovies'
import Spinner from '../../Spinner'
import { HeroTitle, HeroParagraph, HeroCoverContainer,HeroCover } from './HomepageElements'


const apikey ='****';

const Home = () => {
    const [moviesState, setMoviesState] = useState([]);
    const[loading,setLoading] = useState(true)
    useEffect(() => {
        const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`;
        axios.get(apiUrl).then((movies) => {
            const popularMoviesArray = movies.data.results;
            setLoading(false)
            setMoviesState(popularMoviesArray);
          });
      }, [setMoviesState]);


    return (
        <React.Fragment>
            <HeroCoverContainer>
                <HeroCover cover={cover}>
                <HeroTitle>The movie app </HeroTitle>
                <HeroParagraph>For all the movie lovers to enjoy</HeroParagraph>
                <Button 
                    margin='auto 1rem auto 2rem'
                    bg='green'
                    fontSize='20px'
                    width='200px'
                    height='3rem'
                    >
                    Trending
                </Button>
                </HeroCover>
            </HeroCoverContainer>
                <CardBoard>
                <InfoCardsBoard/>
            </CardBoard>
            <Title>TRENDING</Title>
                {!loading && <Spinner/>}
            <TrendingMovies movies={moviesState}/>
        </React.Fragment>
    )
}
export default Home;
