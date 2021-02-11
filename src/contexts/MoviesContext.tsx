//@ts-nocheck
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const MoviesContext = createContext<MoviesContextType | null>(null);
    const MoviesContextProvider = ({ children }): React.ReactElement => {
    const [movies, setMovies] = useState([]);
    const[loading,setLoading] = useState(true)

    const apikey = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`;
        axios.get(apiUrl).then((movies) => {
            const popularMoviesArray = movies.data.results;
            setLoading(false)
            setMovies(popularMoviesArray);
          });
      }, [setMovies]);
    
  return <MoviesContext.Provider value={{movies,loading}}>{children}</MoviesContext.Provider>;
};
export default MoviesContextProvider;