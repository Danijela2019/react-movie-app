//@ts-nocheck
import React, {useContext} from 'react'

import {CenterElements} from '../../shared/CenterElements'
import Card from '../../card'
import MovieInfoContent from '../../movieInfoContent'
import {SearchedAddButton} from '../searchedItems/SearchedItemsElements'
import Button from '../../button'
import { MovieContentWrapper, MovieDataColumn } from './MoviepageElements'
import { useHistory } from 'react-router-dom'
import {MoviesContext} from '../../../contexts/MoviesContext'

const MovieInfoCard = () => {
    const {singleMovie,addTrendingToFavorites,favoriteMovies} = useContext(MoviesContext)
    

    let history = useHistory();
    const redirectToHome = () => {
        history.goBack();
    }

    const isAdded = (movieId) => {
        return favoriteMovies.find((item) => item.id === movieId)
    }
    
    return (
        <CenterElements>
            <Card width='100%' height='fit-content' margin='1rem'>
            <MovieContentWrapper>
              <MovieInfoContent data={singleMovie} /> 
               <MovieDataColumn>
                    <SearchedAddButton 
                        margin='1rem 3rem'
                        bg="#13b300"
                        fontSize='15px'
                        width='150px'
                        height='2rem'
                        onClick={() => addTrendingToFavorites(singleMovie)}
                        disabled= {isAdded(singleMovie.id)}
                        >
                          {!isAdded(singleMovie.id) ? 'Add to favorites' : 'Added to favorites'}
                    </SearchedAddButton>
                    <Button
                        margin='1rem 3rem'
                        bg="var(--color-danger)"
                        fontSize='15px'
                        width='150px'
                        height='2rem'
                        clicked={redirectToHome}
                        >
                        Close
                    </Button>
                </MovieDataColumn>
            </MovieContentWrapper>
            </Card>
     </CenterElements>
    )
}

export default MovieInfoCard;