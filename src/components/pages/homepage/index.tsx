import React from 'react';

import CardBoard from '../../shared/cardBoard';
import cover from '../../../assets/backgroundImages/it.jpg';
import InfoCardsBoard from './InfoCardsBoard';
import TrendingMovies from './TrendingMovies';
import UpcomingMovies from './UpcomingMovies';
import { HeroTitle, HeroParagraph, HeroCoverContainer } from './HomepageElements';
import TopRatedMovies from './TopRatedMovies';
import { Background } from '../../shared/Background';

const Home = (): React.ReactElement => {
  return (
    <>
      <HeroCoverContainer>
        <Background background={cover} height="45vh" light="10px 10px 100px 80px black  inset">
          <HeroTitle>The movie app </HeroTitle>
          <HeroParagraph>For all the movie lovers to enjoy</HeroParagraph>
        </Background>
        <TrendingMovies />
      </HeroCoverContainer>
      <CardBoard>
        <InfoCardsBoard />
      </CardBoard>
      <UpcomingMovies />
      <TopRatedMovies />
    </>
  );
};
export default Home;
