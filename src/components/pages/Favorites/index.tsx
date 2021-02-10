import React from 'react'
import { CenterElements } from '../../Shared/CenterElements';
import { Title } from '../../Shared/TextElements';
import SearchedMovieCards from '../SearchedItems/SearchedMovieCard';
import FavoritesCardBoard from './FavoritesCardBoard';
import { NoFavoritesBackground, FavoritesBackground, MovieTitle} from './FavortiesElements';

const Favorites = () => {

    const condition= false;

    const noFavorites = (
        <NoFavoritesBackground>
        <CenterElements>
        <Title>You do not have any favorites yet.</Title>
        <Title>Let's add some🙂</Title>
        </CenterElements>
        </NoFavoritesBackground>
    )

    const showFavorites = (
        <FavoritesBackground>
            <FavoritesCardBoard/>
        </FavoritesBackground>
    )

    return (
        <React.Fragment>
       {condition ? noFavorites : showFavorites}
       </React.Fragment>
    )
}

export default Favorites;