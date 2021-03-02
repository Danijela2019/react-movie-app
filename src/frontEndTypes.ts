import { ReactChildren, ReactElement, ReactChild, ReactNode } from 'react';

export interface IPropsChildren {
  children: React.ReactNode;
}

export interface Movie {
  id: number;
  date: string;
  title: string;
  rating: number;
  resume: string;
  picture?: string;
}

export interface Item {
  id: number;
  date: string;
  title: string;
  rating: number;
  resume: string;
  picture?: string;
  number?: number;
}
export interface IMovieData {
  data: Movie;
}
export interface IMovieItem {
  data: Item;
}

export interface IMovie {
  id: string;
  title: string;
  vote_average: string;
  overview: string;
  poster_path: string;
  release_date: string;
}

export interface IMoviesContext {
  popularMovies: Movie[];
  searchedMovies: Movie[];
  favoriteMovies: Movie[];
  upcomingMovies: Movie[];
  topRatedMovies: Movie[];
  singleMovie: Movie;
  getSearchedMovies: (searchValue: string) => void;
  addToFavorites: (movieId: number) => void;
  removeFromFavorites: (movieId: number) => void;
  getSingleMovieData: (movieData: Movie) => void;
}

export interface IChildren {
  children: React.ReactNode;
}

export interface IStyledButtonProps {
  bg: string;
  fontSize: string;
  width: string;
  height: string;
}

export interface IButtonWrapperProps {
  margin: string;
}

export interface IErrorProp {
  error: boolean;
}

export interface IButtonProps {
  disabled?: boolean | undefined;
  clicked?: (e?: any) => void | undefined;
  bg: string;
  fontSize: string;
  width: string;
  height: string;
  margin: string;
  children: ReactChildren | string;
}

export interface ICardContainer {
  margin: string;
  width: string;
  height: string;
}

export interface ICardProps {
  width: string;
  height: string;
  margin: string;
  children: React.ReactNode;
}

export interface ICardBoardProps {
  children: ReactNode;
}

export interface IFollowMeDataProps {
  id: number;
  text: string;
  icon: ReactElement;
  link: string;
}
export interface IFollowMeData {
  data: IFollowMeDataProps;
}

export interface IIconProps {
  color: string;
  size: string;
  children: React.ReactElement;
}

export interface ILayoutProps {
  children: React.ReactElement;
}

export interface INavItemProps {
  sidebar: boolean;
  closeMenu: () => void;
}

export interface IInfoCardProps {
  data: {
    id: number;
    title: string;
    text: string;
    icon: React.ReactElement;
  };
}
export interface IMovieBackground {
  cover: any;
}

export interface IBackgroundProps {
  background: string;
  height?: string;
  light?: string;
}

export interface INoResultsProps {
  cover: string;
  children?: React.ReactNode;
}

export interface IFavoritesTrashcanProps {
  isVisible: boolean;
}
export interface ISearchedBlurBlack {
  cover: string;
}
export interface IFormIconProp {
  children: JSX.Element;
}
