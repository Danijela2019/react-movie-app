import React, { createContext,useState, useEffect} from 'react'; 
import {IChildren, IMoviesContext, Movie } from '../frontEndTypes'
import {getPopularMovies,getUpcomingMovies, fetchSearchedMovies } from '../util/contextFunctions'



export const MoviesContext = createContext<IMoviesContext|null>(null);

const favoriteMoviesStorage = localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies') || '') : [];
//@ts-ignore
const singleMovieStorage = JSON.parse(localStorage.getItem('movie'));
const searchedMoviesStorage = localStorage.getItem('searchedMovies') ? JSON.parse(localStorage.getItem('searchedMovies') || '') : [];

  const MoviesContextProvider = ({ children }: IChildren): React.ReactElement => {
  const [popularMovies,setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState(searchedMoviesStorage)
  const [favoriteMovies, setFavoriteMovies] = useState(favoriteMoviesStorage);
  const [singleMovie,setSingleMovie] = useState(singleMovieStorage);


  useEffect(() => {
    getPopularMovies()
      .then(data => {
        setPopularMovies(data)
      })
      .catch((_) => setPopularMovies([]));
  }, []);

  useEffect(() => {
      getUpcomingMovies()
        .then(data => {
          setUpcomingMovies(data)
        })
        .catch((_) => setUpcomingMovies([]));
  }, []);

  const getSearchedMovies= async(searchValue:string)=> {
      const hits = await fetchSearchedMovies(searchValue)
      localStorage.setItem('searchedMovies', JSON.stringify(hits));
      setSearchedMovies(hits)
    }
  
  const addToFavorites = (movieId:number) => {
    const copyFavoriteMovies= [...favoriteMovies];
    if(!favoriteMovies.find((item:Movie) => item.id === movieId)){
      if(!searchedMovies.find((item:Movie) =>item.id === movieId)){
        copyFavoriteMovies.push(singleMovie);
        localStorage.setItem('movies', JSON.stringify(copyFavoriteMovies));
        setFavoriteMovies(copyFavoriteMovies);
      } else {
      const movie= searchedMovies.find((item:Movie) =>item.id === movieId)
      copyFavoriteMovies.push(movie);
      localStorage.setItem('movies', JSON.stringify(copyFavoriteMovies));
      setFavoriteMovies(copyFavoriteMovies);
      }
    }
  };

  const removeFromFavorites = (movieId:number) => {
    const moviesArray = favoriteMovies.filter((item:Movie) => item.id !== movieId);
    localStorage.setItem('movies', JSON.stringify(moviesArray));
    setFavoriteMovies(moviesArray);
  };

  const getSingleMovieData = (movieData: Movie)=> {
    localStorage.setItem('movie', JSON.stringify(movieData));
    setSingleMovie(movieData)
  }


return <MoviesContext.Provider value={{ popularMovies,upcomingMovies,getSearchedMovies, searchedMovies, addToFavorites ,favoriteMovies, removeFromFavorites, getSingleMovieData, singleMovie}}>
    {children}
    </MoviesContext.Provider>;
};
  
  export default MoviesContextProvider;



