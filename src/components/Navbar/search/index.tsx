import React,{useState} from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import Icon from '../../Icon';
import { SearchBox, SearchButton, SearchForm, SearchInput } from './SearchElements'

export const Search = (props:any) => {
    const [searchValue, setSearchValue] = useState("");
    

    const handleSearchInputChanges = (e:any) => {
      setSearchValue(e.target.value);
    }
  
    const resetInputField = () => {
      setSearchValue("")
    }
  
    const callSearchFunction = (e:any) => {
      e.preventDefault();
      props.search(searchValue);
      resetInputField();
    }


    return (
        <React.Fragment>
             <SearchBox>
        <SearchForm>
          <input 
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