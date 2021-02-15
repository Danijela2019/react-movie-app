//@ts-nocheck
import React, { useContext } from 'react'
import { CenterElements } from '../../Shared/CenterElements';
import { Title } from '../../Shared/TextElements';
import SearchedMovieCards from '../SearchedItems/SearchedMovieCard';
import FavoritesCardBoard from './FavoritesCardBoard';
import { NoFavoritesBackground, FavoritesBackground, MovieTitle} from './FavortiesElements';
import {MoviesContext} from '../../../contexts/MoviesContext'

const Favorites = () => {
const {favoriteMovies} = useContext(MoviesContext)
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
       {favoriteMovies.length === 0? noFavorites : showFavorites}
       </React.Fragment>
    )
}

export default Favorites;