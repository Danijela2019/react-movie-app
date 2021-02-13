import { ReactChildren } from "react";
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