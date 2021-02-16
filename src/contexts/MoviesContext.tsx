// @ts-nocheck
import React, { createContext,useState, useEffect, useContext } from 'react';

const baseUrl = "https://api.themoviedb.org/3";
const posterBaseUrl = "https://image.tmdb.org/t/p/w300";
const apiKey = process.env.REACT_APP_API_KEY;

export const MoviesContext = createContext();

const storage = localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies') || '') : [];

  const MoviesContextProvider = ({ children }: any): React.ReactElement => {
  const [popularMovies,setPopularMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([])
  const [favoriteMovies, setFavoriteMovies] = useState(storage);

  const getPopularMovies= () => {
    const popularUrl = `${baseUrl}/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
    return fetch(popularUrl)
      .then((res) => res.json())
      .then((response) => mapData(response.results))
      .catch((_) => {
        return [];
      });
  }

  useEffect(() => {
    getPopularMovies()
      .then(data => {
        setPopularMovies(data)
      })
      .catch((_) => setPopularMovies([]));
    }, []);

    const getSearchedMovies= async (searchValue:any)=> {
      const searchApiUrl = `${baseUrl}/search/movie?query=${searchValue}&api_key=${apiKey}`
      try {
      const res = await fetch(searchApiUrl);
      const response = await res.json();
      const newData= mapData(response.results);
      setSearchedMovies(newData)
    } catch (_) {
      return [];
    }
  }
    
  const mapData = (res:any) => {
    return res.map((movie:any) => {
      const {
        id,
        title,
        vote_average,
        overview,
        poster_path,
        release_date,
      } = movie;
  
      return {
        id,
        title,
        date: release_date,
        rating: vote_average,
        resume: overview,
        picture: poster_path ? `${posterBaseUrl}${poster_path}` : undefined,
      };
    });
  }

  const addToFavorites = (movieId) => {
    if(!favoriteMovies.find((item) => item.id === movieId)){
    const movie = searchedMovies.filter((item) =>  item.id === movieId)[0]
    const copyFavoriteMovies= [...favoriteMovies];
      copyFavoriteMovies.push(movie);
      localStorage.setItem('movies', JSON.stringify(copyFavoriteMovies));
      setFavoriteMovies(copyFavoriteMovies);
    }
  };

  const removeFromFavorites = (movieId) => {
    const moviesArray = favoriteMovies.filter((item) => item.id !== movieId);
    localStorage.setItem('movies', JSON.stringify(moviesArray));
    setFavoriteMovies(moviesArray);
  };

return <MoviesContext.Provider value={{ popularMovies,getSearchedMovies, searchedMovies, addToFavorites ,favoriteMovies, removeFromFavorites}}>
    {children}
    </MoviesContext.Provider>;
};
  
  export default MoviesContextProvider;



