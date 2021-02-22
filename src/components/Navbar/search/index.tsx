import React,{useState, useContext} from 'react';
import { SearchBox, SearchButton, SearchForm, SearchInput } from './SearchElements'
import {MoviesContext} from '../../../contexts/MoviesContext'
import { useHistory } from 'react-router-dom';
import Icon from '../../icon';
import { AiOutlineSearch } from 'react-icons/ai';

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [_movies,setMovies] = useState([]);
  //@ts-ignore
  const { getSearchedMovies} = useContext(MoviesContext); 

  let history = useHistory();
  const redirectToSearchedItems = () => { 
    history.push('/searched-items')
}
  
  const handleSearchInputChanges = (event:React.FormEvent) => {
    //@ts-ignore
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
            <SearchButton  onClick={callSearchFunction}>
            <Icon color='black' size='18px'>
                <AiOutlineSearch/>
              </Icon>
              
            </SearchButton>
        </SearchForm>
      </SearchBox> 
    </React.Fragment>
  )
}

export default Search;