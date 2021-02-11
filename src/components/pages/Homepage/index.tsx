//@ts-nocheck
import React,{useContext} from 'react'

import {Title} from '../../Shared/TextElements'
import CardBoard from '../../CardBoard'
import Button from '../../Button'
import cover from '../../../assets/it.png'
import InfoCardsBoard from './InfoCardsBoard'
import TrendingMovies from './TrendingMovies'
import Spinner from '../../Spinner'
import { HeroTitle, HeroParagraph, HeroCoverContainer,HeroCover } from './HomepageElements'
import { MoviesContext } from '../../../contexts/MoviesContext';




const Home = () => {
    const {movies, loading} = useContext(MoviesContext);
    
    return (
        <React.Fragment>
            <HeroCoverContainer>
                <HeroCover cover={cover}>
                <HeroTitle>The movie app </HeroTitle>
                <HeroParagraph>For all the movie lovers to enjoy</HeroParagraph>
                <Button 
                    margin='auto 1rem auto 2rem'
                    bg= 'var(--color-primary)'
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
                {loading && <Spinner/>}
            <TrendingMovies movies={movies}/>
        </React.Fragment>
    )
}
export default Home;
