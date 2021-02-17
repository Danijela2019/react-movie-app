//@ts-nocheck
import React,{useContext} from 'react'
import {MoviesContext} from '../../../contexts/MoviesContext'
import MovieInfoContent from '../../movieInfoContent';
import {Image, SearchedCardBoardContainer, SearchedCardContainer, SearchedContentWrapper,AddButton} from './SearchedItemsElements'

const SearchedMovieCard = ({data}) => {
    const {addToFavorites, favoriteMovies}= useContext(MoviesContext);

    
    const isAdded = (movieId) => {
        return favoriteMovies.find((item) => item.id === movieId)
    }
    return (
        <SearchedCardContainer>
            <SearchedContentWrapper>
                <Image as='img' src={data.picture} alt={data.title}></Image>
                <MovieInfoContent data={data}/>
                <AddButton 
                    onClick ={() => addToFavorites(data.id)}
                    disabled= {isAdded(data.id)}
                >
                    {!isAdded(data.id) ? 'Add to favorites' : 'Added to favorites'}
                </AddButton>
            </SearchedContentWrapper>
        </SearchedCardContainer>
    )
};

const SearchedMovieCards = () =>{
    const { searchedMovies } = useContext(MoviesContext);
    return (
        <SearchedCardBoardContainer>
            {searchedMovies.map((data) => <SearchedMovieCard data={data} key={data.id} />)}
        </SearchedCardBoardContainer>
    )
}

export default SearchedMovieCards;
