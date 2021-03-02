import React, { useContext, useEffect } from 'react';

import { MovieBackground, MovieImage, MovieTitleContainer } from './MoviepageElements';
import { Title } from '../../shared/TextElements';
import MovieInfoCard from './MovieInfoCard';
import { MoviesContext } from '../../../contexts/MoviesContext';
import SimilarMovies from './SimilarMovies';
import imgPlaceholder from '../../../assets/default.jpg';
import { IMoviesContext } from '../../../frontEndTypes';

const MoviePage = (): React.ReactElement => {
  const { singleMovie } = useContext(MoviesContext) as IMoviesContext;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleMovie]);

  return (
    <>
      <MovieBackground cover={singleMovie.picture}>
        <MovieImage
          as="img"
          src={singleMovie.picture || imgPlaceholder}
          width="200px"
          height="auto"
          alt="Joker"
        />
        <MovieTitleContainer>
          <Title>{singleMovie.title}</Title>
        </MovieTitleContainer>
      </MovieBackground>
      <MovieInfoCard />
      <SimilarMovies />
    </>
  );
};

export default MoviePage;
