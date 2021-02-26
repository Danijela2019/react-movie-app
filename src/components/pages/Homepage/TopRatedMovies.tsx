import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { Img } from '../../shared/ImageElements';
import Card from '../../card';
import { MoviesContext } from '../../../contexts/MoviesContext';
import { IMovieData, Movie } from '../../../frontEndTypes';
import { ScrollHorizontally } from '../../shared/ScrollHorizontally';
import imgPlaceholder from '../../../assets/default.jpg';
import { Title } from '../../shared/TextElements';

const TopRatedMovieCard = ({ data }: IMovieData): React.ReactElement => {
  // @ts-ignore
  const { getSingleMovieData } = useContext(MoviesContext);
  const history = useHistory();
  const redirectToMoviePage = () => {
    getSingleMovieData(data);
    history.push('/movie');
  };

  return (
    <div onClick={redirectToMoviePage}>
      <Card width="8rem" height="auto" margin="1rem 0.5rem">
        <Img as="img" src={data.picture || imgPlaceholder} alt={data.title} />
      </Card>
    </div>
  );
};

const TopRatedMovies = (): React.ReactElement => {
  // @ts-ignore
  const { topRatedMovies } = useContext(MoviesContext);
  return (
    <>
      {topRatedMovies.length > 0 && <Title>TOP RATED</Title>}
      <ScrollHorizontally>
        {topRatedMovies.map((movie: Movie) => (
          <TopRatedMovieCard data={movie} key={movie.id} />
        ))}
        ;
      </ScrollHorizontally>
    </>
  );
};

export default TopRatedMovies;
