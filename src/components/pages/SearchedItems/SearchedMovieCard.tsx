//@ts-nocheck
import React,{useContext} from 'react'
import {MoviesContext} from '../../../contexts/MoviesContext'
import Button from '../../Button'
import MovieInfoContent from '../../MovieInfoContent';
import {Image, SearchedCardBoardContainer, SearchedCardContainer, SearchedContentWrapper} from './SearchedItemsComponents'

const SearchedMovieCard = ({data}) => {
    return (
        <SearchedCardContainer>
            <SearchedContentWrapper>
                <Image as='img' src={data.picture} alt={data.title}></Image>
                <MovieInfoContent data={data}/>
                <Button 
                    margin='1rem 3rem'
                    bg="var(--color-primary)"
                    fontSize='15px'
                    width='8rem'
                    height='2rem'
                >
                    Add to favorites
                </Button>
            </SearchedContentWrapper>
        </SearchedCardContainer>
    )
};


const SearchedMovieCards = () =>{
    const { searchedMovies } = useContext(MoviesContext);
    console.log('here',searchedMovies)
    return (
        <SearchedCardBoardContainer>
            {searchedMovies.map((data) => <SearchedMovieCard data={data} key={data.id} />)}
        </SearchedCardBoardContainer>
    )
}


export default SearchedMovieCards;