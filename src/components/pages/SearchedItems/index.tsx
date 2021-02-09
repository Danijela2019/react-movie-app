//@ts-nocheck
import React from 'react'
import {SearchedContainer} from './SearchedItemsComponents'
import SearchedMovieCards from './SearchedMovieCard';

const SearchedItems = () => {
    return (
        <SearchedContainer>
            <SearchedMovieCards/>
        </SearchedContainer>
    )
}

export default SearchedItems;