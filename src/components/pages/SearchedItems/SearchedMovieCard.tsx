//@ts-nocheck
import React,{useContext} from 'react'
import {MoviesContext} from '../../../contexts/MoviesContext'
import MovieInfoContent from '../../movieInfoContent';
import {Image, SearchedCardBoardContainer, SearchedCardContainer, SearchedContentWrapper,AddButton} from './SearchedItemsElements'
import imgPlaceholder from '../../../assets/default.jpg'
import { Title } from '../../shared/TextElements';
import NoResults from '../../noResults';

const SearchedMovieCard = ({data}) => {
    const {addToFavorites, favoriteMovies}= useContext(MoviesContext);

    
    const isAdded = (movieId) => {
        return favoriteMovies.find((item) => item.id === movieId)
    }
    return (
        <SearchedCardContainer>
            <SearchedContentWrapper>
                <Image as='img' src={data.picture|| imgPlaceholder} alt={data.title}></Image>
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

const noSearchResults = (
    <NoResults>
        <Title>🙁Sorry we do not have any results for you.</Title>
        <Title>Let's try with another keyword.</Title>
    </NoResults>
)


const SearchedMovieCards = () => {
    const { searchedMovies } = useContext(MoviesContext);

    return (
        <React.Fragment>
        {searchedMovies.length > 0 ? (<SearchedCardBoardContainer>
            {searchedMovies.map((data) => <SearchedMovieCard data={data} key={data.id} />)}
        </SearchedCardBoardContainer>)
         : noSearchResults
        }
        </React.Fragment>
    )
}

export default SearchedMovieCards;
