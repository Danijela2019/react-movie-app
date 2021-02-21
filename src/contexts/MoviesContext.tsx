import React, { createContext,useState, useEffect} from 'react'; 
import {IChildren, IMovie, IMoviesContext, Movie } from '../frontEndTypes'

const baseUrl = "https://api.themoviedb.org/3";
const posterBaseUrl = "https://image.tmdb.org/t/p/w300";
const apiKey = process.env.REACT_APP_API_KEY;

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


  const getPopularMovies= () => {
    const popularUrl = `${baseUrl}/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
    return fetch(popularUrl)
      .then((res) => res.json())
      .then((response) => mapData(response.results))
      .catch((_) => {
        return [];
      });
  }

  const getUpcomingMovies= () => {
    const upcomingUrl = `${baseUrl}/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;
    return fetch(upcomingUrl)
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

    useEffect(() => {
      getUpcomingMovies()
        .then(data => {
          setUpcomingMovies(data)
        })
        .catch((_) => setUpcomingMovies([]));
      }, []);

    const getSearchedMovies= async (searchValue:string)=> {
      const searchApiUrl = `${baseUrl}/search/movie?query=${searchValue}&api_key=${apiKey}`
      try {
      const res = await fetch(searchApiUrl);
      const response = await res.json();
      const newData= mapData(response.results);
      localStorage.setItem('searchedMovies', JSON.stringify(newData));
      setSearchedMovies(newData)
    } catch (_) {
      return [];
    }
  }
  
    
  const mapData = (res:any) => {
    return res.map((movie:IMovie) => {
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

  const addToFavorites = (movieId:number) => {
    if(!favoriteMovies.find((item:Movie) => item.id === movieId)){
    const movie= searchedMovies.find((item:Movie) =>item.id === movieId)
    const copyFavoriteMovies= [...favoriteMovies];
      copyFavoriteMovies.push(movie);
      localStorage.setItem('movies', JSON.stringify(copyFavoriteMovies));
      setFavoriteMovies(copyFavoriteMovies);
    }
  };

  const addTrendingToFavorites = (movie:Movie) => {
    const copyFavoriteMovies= [...favoriteMovies];
      copyFavoriteMovies.push(movie);
      localStorage.setItem('movies', JSON.stringify(copyFavoriteMovies));
      setFavoriteMovies(copyFavoriteMovies);
  }
  

  const removeFromFavorites = (movieId:number) => {
    const moviesArray = favoriteMovies.filter((item:Movie) => item.id !== movieId);
    localStorage.setItem('movies', JSON.stringify(moviesArray));
    setFavoriteMovies(moviesArray);
  };

  const getSingleMovieData = (movieData: Movie)=> {
    localStorage.setItem('movie', JSON.stringify(movieData));
    setSingleMovie(movieData)
  }


return <MoviesContext.Provider value={{ popularMovies,upcomingMovies,getSearchedMovies, searchedMovies, addToFavorites ,favoriteMovies, removeFromFavorites, getSingleMovieData, singleMovie,addTrendingToFavorites}}>
    {children}
    </MoviesContext.Provider>;
};
  
  export default MoviesContextProvider;



