//@ts-nocheck
import React from 'react'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import {SearchedContainer} from './SearchedItemsComponents'
import SearchedMovieCards from './SearchedMovieCard';

const SearchedItems = () => {
    return (
        <SearchedContainer>
            <Navbar/>
            <SearchedMovieCards/>
            <Footer/>
        </SearchedContainer>
    )
}

export default SearchedItems;