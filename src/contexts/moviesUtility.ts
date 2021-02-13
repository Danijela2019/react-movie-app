import {Movie} from '../types'

const baseUrl = "https://api.themoviedb.org/3";
const posterBaseUrl = "https://image.tmdb.org/t/p/w300";
const apiKey = process.env.REACT_APP_API_KEY;

export const  getPopularMovies= () => {
  const popularUrl = `${baseUrl}/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
  return fetch(popularUrl)
    .then((res) => res.json())
    .then((response) => mapData(response.results))
    .catch((_) => {
      return [];
    });
}
export const getSearchedMovies= async (searchValue:any)=> {
    const searchApiUrl = `${baseUrl}/search/movie?query=${searchValue}&api_key=${apiKey}`
    try {
    const res = await fetch(searchApiUrl);
    const response = await res.json();
    return (mapData(response.results));
  } catch (_) {
    return [];
  }
}

function mapData(res:any) {
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

