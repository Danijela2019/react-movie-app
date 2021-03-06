import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { Img } from '../../shared/ImageElements';
import Card from '../../shared/card';
import { MoviesContext } from '../../../contexts/MoviesContext';
import { ScrollHorizontally } from '../../shared/ScrollHorizontally';
import imgPlaceholder from '../../../assets/default.jpg';
import { PopularNumber, PopularSpan } from './HomepageElements';
import { IMovieItem, IMoviesContext, Item } from '../../../frontEndTypes';

const TrendingMovieCard = ({ data }: IMovieItem) => {
  const { getSingleMovieData } = useContext(MoviesContext) as IMoviesContext;
  const history = useHistory();
  const redirectToMoviePage = () => {
    getSingleMovieData(data);
    history.push('/movie');
  };

  return (
    <div onClick={redirectToMoviePage}>
      <Card width="8rem" height="auto" margin="1rem 0.5rem">
        <PopularSpan>
          <PopularNumber>{data.number}</PopularNumber>
        </PopularSpan>
        <Img as="img" src={data.picture || imgPlaceholder} alt={data.title} />
      </Card>
    </div>
  );
};

const TrendingMovies = (): React.ReactElement => {
  const { popularMovies } = useContext(MoviesContext) as IMoviesContext;
  const copyPopularMovies = popularMovies.slice();
  copyPopularMovies.map((item: Item, index: number) => (item.number = index + 1));
  return (
    <ScrollHorizontally>
      {copyPopularMovies.map((movie: Item) => (
        <TrendingMovieCard data={movie} key={movie.id} />
      ))}
      ;
    </ScrollHorizontally>
  );
};

export default TrendingMovies;
