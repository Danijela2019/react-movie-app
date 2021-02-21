import { ReactChildren, ReactElement } from "react";
import { ReactChild } from "react";

export interface IPropsChildren {
    children: ReactChild | ReactChildren;
  }

export interface Movie {
    id: number;
    date: string;
    title: string;
    rating: number;
    resume: string;
    picture?: string;
  }
export interface IMovieData {
  data:Movie;
}

export interface IMovie {
    id: string,
    title:string,
    vote_average:string,
    overview :string,
    poster_path:string,
    release_date:string
  }

  export interface IMoviesContext {
    popularMovies: Movie[],
    searchedMovies: Movie[],
    favoriteMovies: Movie[],
    upcomingMovies: Movie[],
    singleMovie: Movie|{},
    getSearchedMovies: Function,
    addToFavorites: Function,
    removeFromFavorites:Function,
    getSingleMovieData:Function,
    addTrendingToFavorites: Function
  }

  export interface IChildren {
    children: ReactChild | ReactChildren;
  }
  
  export interface IStyledButtonProps {
    bg: string,
    fontSize: string,
    width: string,
    height: string;
  };
  
  export interface IButtonWrapperProps {
    margin:string;
  }

  export interface IButtonProps {
    clicked?:() => void|undefined;
    bg: string,
    fontSize: string,
    width: string,
    height: string;
    margin:string;
    children: ReactChildren|string;
  }

export interface ICardContainer {
    margin: string, 
    width: string,
    height: string
    }

export interface ICardProps {
  width:string,
  height:string,
  margin:string,
  children: ReactChildren|ReactChild
}

export interface ICardBoardProps {
  children:ReactChild|ReactChildren
}

export interface IFollowMeDataProps {
  id: number,
  text: string,
  icon:  ReactElement,
  link:string,
}
export interface IFollowMeData {
  data: IFollowMeDataProps
}

export interface IIconProps {
  color:string,
  size:string,
  children:React.ReactElement
}

export interface  ILayoutProps{
  children: React.ReactElement
  }
  
export interface INavItemProps {
  sidebar: boolean,
  closeMenu: () => void;
}

export interface IHeroCoverProps {
  cover: string
  }

export  interface IInfoCardProps {
    data:{id:number,
    title: string,
    text: string,
    icon: React.ReactElement
    }
}
export interface IMovieBackground {
  cover:string
  }
  