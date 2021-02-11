import React from 'react'

import Button from '../../Button'
import movieData from '../../../data/movies';
import MovieInfoContent from '../../MovieInfoContent';
import {Image, SearchedCardBoardContainer, SearchedCardContainer, SearchedContentWrapper} from './SearchedItemsComponents'


const SearchedMovieCard = (props:any) => {
    return (
        <SearchedCardContainer>
            <SearchedContentWrapper>
                <Image as='img'  src={props.data.src} alt={props.data.alt}></Image>
                <MovieInfoContent/>
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

const searchedMovieCards = movieData.map((data, index) => <SearchedMovieCard data={data} key={index} />);


const SearchedMovieCards = () =>{
    return (
        <SearchedCardBoardContainer>
            {searchedMovieCards}
        </SearchedCardBoardContainer>
    )
}


export default SearchedMovieCards;