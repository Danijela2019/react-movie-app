//@ts-nocheck
import React, { useContext } from 'react'
import { CenterElements } from '../../Shared/CenterElements';
import { Title } from '../../Shared/TextElements'
import FavoritesCardBoard from './FavoritesCardBoard';
import { NoFavoritesBackground, FavoritesBackground, TitleWrapper} from './FavortiesElements';
import {MoviesContext} from '../../../contexts/MoviesContext'

const Favorites = () => {
const {favoriteMovies} = useContext(MoviesContext)




    const noFavorites = (
        <NoFavoritesBackground>
        <TitleWrapper>
        <Title>You do not have any favorites yet.</Title>
        <Title>Let's add some🙂</Title>
        </TitleWrapper>
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