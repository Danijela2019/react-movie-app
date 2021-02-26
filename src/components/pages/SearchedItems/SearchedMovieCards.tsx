//@ts-nocheck
import React,{useContext} from 'react'
import {MoviesContext} from '../../../contexts/MoviesContext'
import {SearchedMovieCardContainer, SearchedCardBoardContainer,SearchedBlurBlack,SearchedH4,SearchedHeader,SearchedImage,SearchedInfoSection,SearchedMovieDesc,SearchedMovieText,
SearchedMovieHeader,SearchedAddButton} from './SearchedItemsElements'
import imgPlaceholder from '../../../assets/default.jpg'
import { Title } from '../../shared/TextElements';
import NoResults from '../../noResults';
import cover  from '../../../assets/backgroundImages/shrek.jpg'
import { Movie } from '../../../frontEndTypes';

const SearchedMovieCard = ({data}:any) => {
    const {addToFavorites, favoriteMovies}= useContext(MoviesContext);

    const isAdded = (movieId:number) => {
        return favoriteMovies.find((item:Movie) => item.id === movieId)
    }
    return (
        <SearchedMovieCardContainer>
            <SearchedInfoSection>
                <SearchedMovieHeader>
                    <SearchedImage as='img' src={data.picture|| imgPlaceholder} alt={data.title}/>
                    <SearchedHeader>{data.title}</SearchedHeader>
                    <SearchedH4>{data.rating} | {new Date(data.date).getFullYear()}</SearchedH4>
                </SearchedMovieHeader>
                <SearchedMovieDesc>
                    <SearchedMovieText>{data.resume}</SearchedMovieText>
                </SearchedMovieDesc>
                <SearchedAddButton 
                    onClick ={() => addToFavorites(data.id)}
                    disabled= {isAdded(data.id)}
                    >
                    {!isAdded(data.id) ? 'Add to favorites' : 'Added to favorites'}
                </SearchedAddButton>
            </SearchedInfoSection>
            <SearchedBlurBlack cover={data.picture}></SearchedBlurBlack>
        </SearchedMovieCardContainer> 
    )
}

const noSearchResults = (
    <NoResults cover= {cover}>
        <Title>🙁Sorry we don't have any results for you.</Title>
        <Title>Let's try with another keyword.</Title>
    </NoResults>
)

const SearchedMovieCards = () => {
    const { searchedMovies } = useContext(MoviesContext);

    return (
        <React.Fragment>
        {searchedMovies.length > 0 ? (<SearchedCardBoardContainer>
            {searchedMovies.map((data:Movie) => <SearchedMovieCard data={data} key={data.id} />)}
        </SearchedCardBoardContainer>)
         : noSearchResults
        }
        </React.Fragment>
    )
}

export default SearchedMovieCards;
