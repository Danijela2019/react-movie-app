import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { SearchBox, SearchButton, SearchForm, SearchInput } from './SearchElements';
import { MoviesContext } from '../../../contexts/MoviesContext';
import Icon from '../../icon';

const Search = (): React.ReactElement => {
  const [searchValue, setSearchValue] = useState('');
  const [_movies, setMovies] = useState([]);
  // @ts-ignore
  const { getSearchedMovies } = useContext(MoviesContext);

  const history = useHistory();
  const redirectToSearchedItems = () => {
    history.push('/searched-items');
  };

  const handleSearchInputChanges = (event: React.FormEvent) => {
    // @ts-ignore
    setSearchValue(event.target.value);
  };

  const resetInputField = () => {
    setSearchValue('');
  };

  const callSearchFunction = async (event: React.FormEvent) => {
    event.preventDefault();
    if (searchValue) {
      const movieResults = await getSearchedMovies(searchValue);
      setMovies(movieResults);
    }
    resetInputField();
    redirectToSearchedItems();
  };

  return (
    <>
      <SearchBox>
        <SearchForm>
          <SearchInput type="text" value={searchValue} onChange={handleSearchInputChanges} />
          <SearchButton onClick={callSearchFunction}>
            <Icon color="black" size="18px">
              <AiOutlineSearch />
            </Icon>
          </SearchButton>
        </SearchForm>
      </SearchBox>
    </>
  );
};

export default Search;
