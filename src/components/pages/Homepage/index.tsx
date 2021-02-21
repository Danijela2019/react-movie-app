import React from 'react'

import {Title} from '../../shared/TextElements'
import CardBoard from '../../cardBoard'
import Button from '../../button'
import cover from '../../../assets/it.jpg'
import InfoCardsBoard from './InfoCardsBoard'
import TrendingMovies from './TrendingMovies'
import UpcomingMovies from './UpcomingMovies'
import { HeroTitle, HeroParagraph, HeroCoverContainer,HeroCover } from './HomepageElements'

const Home = () => {
    return (
        <React.Fragment>
        <HeroCoverContainer>
            <HeroCover cover={cover}>
            <HeroTitle>The movie app </HeroTitle>
            <HeroParagraph>For all the movie lovers to enjoy</HeroParagraph>
         </HeroCover>
        <TrendingMovies/>
        </HeroCoverContainer>
        <CardBoard>
            <InfoCardsBoard/>
        </CardBoard>
       
        <Title>IN THEATERS SOON</Title>
        <UpcomingMovies/> 
    </React.Fragment>)
}
export default Home;
