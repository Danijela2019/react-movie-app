import React from 'react'

import {SearchedContainer} from './SearchedItemsElements'
import SearchedMovieCards from './SearchedMovieCard';


const SearchedItems = () => {
    return (
        <SearchedContainer>
            <SearchedMovieCards/>
        </SearchedContainer>
    )
}

export default SearchedItems;