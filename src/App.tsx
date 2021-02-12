//@ts-nocheck
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import {GlobalStyle} from './GlobalStyles'
import Navbar from './components/Navbar';
import Routes from './components/pages';
import Footer from './components/Footer';
import Layout from './components/Layout/Layout';
import MoviesContextProvider from './contexts/MoviesContext';
import styled from 'styled-components'
import SearchMovieCard from './components/pages/SearchedItems/SearchedMovieCard'
import SearchedMovieCards from './components/pages/SearchedItems/SearchedMovieCard';
import Search from './components/Navbar/search'
import {Title} from './components/Shared/TextElements'


const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const search= async (searchValue) => {
      if(searchValue==='') return 
      console.log('This is search value ',searchValue);
      const url = `https://api.themoviedb.org/3/search/movie?api_key=7c03d54f848fc2f61bf22bf4ff565dc6&language=en-US&query=${searchValue}&page=1&include_adult=false`;
      const response = await fetch(url);
      const responseJson = await response.json();
      
      
      if (responseJson.errors ) {
        setErrorMessage(responseJson.errors);
        setLoading(false);
      }
      else {
        setMovies(responseJson.results);
        setLoading(false);
      }
    };

  useEffect(() => {
		search(searchValue);
	}, [searchValue]);

return (
      <MoviesContextProvider>
      <GlobalStyle />
      <PageContainer>
        <Layout>
        {loading && !errorMessage ? (
         <span>loading...</span>
         ) : errorMessage ? (
          <Title>{errorMessage}</Title>
        ) :(<SearchedMovieCards movies={movies}/> ) }
        
        <Search search={search}/>
      
          <Router>
            <Navbar />
            <Routes />
          </Router>
        </Layout>
        <Footer/>
      </PageContainer>
      </MoviesContextProvider>
  );
}

export default App;
