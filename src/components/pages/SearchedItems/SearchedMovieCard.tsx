//@ts-nocheck
import React from 'react'

import Button from '../../Button'
import MovieInfoContent from '../../MovieInfoContent';
import {Image, SearchedCardBoardContainer, SearchedCardContainer, SearchedContentWrapper} from './SearchedItemsComponents'


const SearchedMovieCard = ({data}:any) => {
    return (
        <SearchedCardContainer>
            <SearchedContentWrapper>
                <Image as='img' src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} alt={data.title}></Image>
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


const SearchedMovieCards = (props:any) =>{
    console.log('Inside SearchedMovieCards', props)
    return (
        <SearchedCardBoardContainer movieData={props.movies}>
            { props.movies.map((data, index) => <SearchedMovieCard data={data} key={index} />)}
        </SearchedCardBoardContainer>
    )
}


export default SearchedMovieCards;