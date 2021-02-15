//@ts-nocheck
import React,{useState, useContext} from 'react';
import { SearchBox, SearchButton, SearchForm, SearchInput } from './SearchElements'
import {MoviesContext} from '../../../contexts/MoviesContext'
import { useHistory } from 'react-router-dom';

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  const { getSearchedMovies} = useContext(MoviesContext); 

  let history = useHistory();
  const redirectToSearchedItems = () => { 
    history.push('/searched-items')
}
  
  const handleSearchInputChanges = (event:React.FormEvent) => {
    setSearchValue(event.target.value);
  }
  
  const resetInputField = () => {
    setSearchValue("")
  }
  
  const callSearchFunction = async (event:React.FormEvent) => {
    event.preventDefault();
    if (searchValue) {
      const movieResults = await getSearchedMovies(searchValue)
      setMovies(movieResults);
      };
      resetInputField();
      redirectToSearchedItems();
    }

  return (
     <React.Fragment>
      <SearchBox>
        <SearchForm>
          <SearchInput
              type="text"
              value={searchValue}
              onChange={handleSearchInputChanges}
          />
            <SearchButton  onClick={callSearchFunction}>GO</SearchButton>
        </SearchForm>
      </SearchBox> 
    </React.Fragment>
  )
}

export default Search;