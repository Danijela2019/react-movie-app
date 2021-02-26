import React from 'react'

import CardBoard from '../../cardBoard'
import cover from '../../../assets/backgroundImages/it.jpg'
import InfoCardsBoard from './InfoCardsBoard'
import TrendingMovies from './TrendingMovies'
import UpcomingMovies from './UpcomingMovies'
import { HeroTitle, HeroParagraph, HeroCoverContainer} from './HomepageElements'
import TopRatedMovies from './TopRatedMovies'
import { Background } from '../../shared/Background'

const Home = () => {
    return (
        <React.Fragment>
        <HeroCoverContainer>
            <Background background={cover} height='55vh' light='30px 30px 150px 100px black  inset'>
            <HeroTitle>The movie app </HeroTitle>
            <HeroParagraph>For all the movie lovers to enjoy</HeroParagraph>
         </Background>
        <TrendingMovies/>
        </HeroCoverContainer>
        <CardBoard>
            <InfoCardsBoard/>
        </CardBoard>
        <UpcomingMovies/> 
        <TopRatedMovies/>
    </React.Fragment>)
}
export default Home;
