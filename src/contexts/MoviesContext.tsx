import React from 'react';
import {Movie} from '../types'


const MoviesContext = React.createContext<{
    movies: Movie[];
    updateMovies: Function;
  }>({
    movies: [],
    updateMovies: Function,
  });

export default MoviesContext;