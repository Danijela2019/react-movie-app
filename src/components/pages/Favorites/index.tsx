import React, { useContext } from 'react';

import { Title } from '../../shared/TextElements';
import FavoritesCardBoard from './FavoritesCardBoard';
import { FavoritesBackground } from './FavortiesElements';
import { MoviesContext } from '../../../contexts/MoviesContext';
import NoResults from '../../noResults';
import cover from '../../../assets/backgroundImages/doctor_strange.jpg';

const Favorites = (): React.ReactElement => {
  // @ts-ignore
  const { favoriteMovies } = useContext(MoviesContext);

  const noFavorites = (
    <NoResults cover={cover}>
      <Title>You do not have any favorites.</Title>
      <Title>Add some🙂</Title>
    </NoResults>
  );

  const showFavorites = (
    <FavoritesBackground>
      <FavoritesCardBoard />
    </FavoritesBackground>
  );

  return <>{favoriteMovies.length === 0 ? noFavorites : showFavorites}</>;
};

export default Favorites;
