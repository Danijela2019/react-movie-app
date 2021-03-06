import { IMovie, Movie } from '../frontEndTypes';

const baseUrl = 'https://api.themoviedb.org/3';
const posterBaseUrl = 'https://image.tmdb.org/t/p/w300';
const apiKey = process.env.REACT_APP_API_KEY;

const mapData = (res: any) => {
  return res.map((movie: IMovie) => {
    const { id, title, vote_average, overview, poster_path, release_date } = movie;
    return {
      id,
      title,
      date: release_date,
      rating: vote_average,
      resume: overview,
      picture: poster_path ? `${posterBaseUrl}${poster_path}` : undefined,
    };
  });
};
export const getHomePageMovies = async (): Promise<Movie[] | []> => {
  const topRatedUrl = fetch(`${baseUrl}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`);
  const popularMoviesUrl = fetch(
    `${baseUrl}/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`
  );
  const upcomingMoviesUrl = fetch(
    `${baseUrl}/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
  );
  try {
    const res = await Promise.all([popularMoviesUrl, upcomingMoviesUrl, topRatedUrl]);
    const data = await Promise.all(res.map((item) => item.json()));
    return data.map((array) => mapData(array.results));
  } catch (_) {
    return [];
  }
};

export const fetchSearchedMovies = async (searchValue: string): Promise<Movie[] | []> => {
  const searchApiUrl = `${baseUrl}/search/movie?query=${searchValue}&api_key=${apiKey}`;
  try {
    const res = await fetch(searchApiUrl);
    const response = await res.json();
    return mapData(response.results);
  } catch (_) {
    return [];
  }
};

export const getSimilarMovies = async (movieId: number): Promise<Movie[] | []> => {
  const similarUrl = `${baseUrl}/movie/${movieId}/recommendations?api_key=${apiKey}&language=en-US&page=1`;
  try {
    const res = await fetch(similarUrl);
    const response = await res.json();
    return mapData(response.results);
  } catch (_) {
    return [];
  }
};
