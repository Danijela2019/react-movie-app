import React, { useContext } from 'react'

import { Title } from '../../shared/TextElements'
import FavoritesCardBoard from './FavoritesCardBoard';
import { FavoritesBackground}  from './FavortiesElements';
import {MoviesContext} from '../../../contexts/MoviesContext'
import NoResults from '../../noResults';

const Favorites = () => {
    //@ts-ignore
const {favoriteMovies} = useContext(MoviesContext)

const noFavorites = (
        <NoResults>
            <Title>You do not have any favorites.</Title>
            <Title>Let's add some🙂</Title>
        </NoResults>
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