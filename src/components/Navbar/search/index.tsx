//@ts-nocheck
import React,{useState, useContext} from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import Icon from '../../Icon';
import { SearchBox, SearchButton, SearchForm, SearchInput } from './SearchElements'
import MoviesContext from '../../../contexts/MoviesContext'
import { getSearchedMovies} from '../../../contexts/moviesUtility';
import { HeroCover } from '../../pages/Homepage/HomepageElements';

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const { updateMovies } = useContext(MoviesContext); 

  const handleSearchInputChanges = (event:React.FormEvent) => {
    setSearchValue(event.target.value);
  }
  
  const resetInputField = () => {
    setSearchValue("")
  }
  
  const callSearchFunction = async (event:React.FormEvent) => {
    event.preventDefault();
    if (searchValue) {
      const movies = await getSearchedMovies(searchValue)
      updateMovies(movies);
      };
      resetInputField();
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