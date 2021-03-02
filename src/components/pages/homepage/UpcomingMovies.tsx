import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { Img } from '../../shared/ImageElements';
import Card from '../../card';
import { MoviesContext } from '../../../contexts/MoviesContext';
import { IMovieData, IMoviesContext, Movie } from '../../../frontEndTypes';
import { ScrollHorizontally } from '../../shared/ScrollHorizontally';
import imgPlaceholder from '../../../assets/default.jpg';
import { Title } from '../../shared/TextElements';

const UpcomingMovieCard = ({ data }: IMovieData) => {
  const { getSingleMovieData } = useContext(MoviesContext) as IMoviesContext;
  const history = useHistory();
  const redirectToMoviePage = () => {
    getSingleMovieData(data);
    history.push('/movie');
  };

  return (
    <div onClick={redirectToMoviePage}>
      <Card width="12rem" height="auto" margin="1rem 0.5rem">
        <Img as="img" src={data.picture || imgPlaceholder} alt={data.title} />
      </Card>
    </div>
  );
};

const UpcomingMovies = (): React.ReactElement => {
  const { upcomingMovies } = useContext(MoviesContext) as IMoviesContext;
  return (
    <>
      {upcomingMovies.length > 0 && <Title>IN THEATERS SOON</Title>}
      <ScrollHorizontally>
        {upcomingMovies.map((movie: Movie) => (
          <UpcomingMovieCard data={movie} key={movie.id} />
        ))}
        ;
      </ScrollHorizontally>
    </>
  );
};

export default UpcomingMovies;
