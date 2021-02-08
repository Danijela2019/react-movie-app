//@ts-nocheck
import React from 'react'
import Navbar from '../../Navbar'
import {Title} from '../../Shared/TextElements'
import CardBoard from '../../CardBoard'
import Button from '../../Button'
import cover from '../../../assets/it.png'
import InfoCardsBoard from './InfoCardsBoard'
import TrendingMovies from './TrendingMovies'
import Footer from '../../Footer'
import { HeroTitle, HeroParagraph, HeroCoverContainer,HeroCover } from './HomepageElements'




const Home = () => {
    return (
        <React.Fragment>
            <HeroCoverContainer>
                <HeroCover cover={cover}>
                <Navbar/>
                <HeroTitle>The movie app </HeroTitle>
                <HeroParagraph>For all the movie lovers to enjoy</HeroParagraph>
                <Button 
                    margin='auto 3rem'
                    bg="#13b300"
                    fontSize='20px'
                    width='12rem'
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
            <TrendingMovies/>
           <Footer/>
        </React.Fragment>
    )
}
export default Home;
