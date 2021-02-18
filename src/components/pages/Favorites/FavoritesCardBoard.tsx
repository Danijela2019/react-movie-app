  //@ts-nocheck
import React, {useState, useContext} from 'react'
import { AiFillDelete} from "react-icons/ai";

import Card from '../../card';
import CardBoard from '../../cardBoard';
import {Img} from '../../shared/ImageElements'
import {FavoritesTrashcan, MovieTitle, RemoveButton, FavoriteCardContainer,CardF} from './FavortiesElements'
import Icon from '../../icon';
import {MoviesContext} from '../../../contexts/MoviesContext'
import { IMovieData } from '../../../frontEndTypes';
import Button from '../../button'



const FavoriteCard = ({data}: IMovieData) => {
    const [active, setActive] = useState(false);
  
    const { removeFromFavorites} = useContext(MoviesContext);
    return(
        <FavoriteCardContainer onMouseEnter={e => {
            e.preventDefault
            setActive(true);
            }}
            onMouseLeave={e => {
                e.preventDefault
            setActive(false)
            }}>
            <CardF>
                <FavoritesTrashcan  isVisible={active} onClick={()=>removeFromFavorites(data.id)}>
                        <RemoveButton>  
                            <Icon color='white' size='30px'>
                                <AiFillDelete/>
                            </Icon>
                        </RemoveButton>
                </FavoritesTrashcan>
                <Img as='img' src={data.picture} alt={data.title}></Img>
                <MovieTitle>{data.title}</MovieTitle>
            </CardF>
        </FavoriteCardContainer>
    )
}

const FavoritesCardBoard = () => {
    const { favoriteMovies} = useContext(MoviesContext);

    return (
        <CardBoard>
            {favoriteMovies.map((data) => <FavoriteCard data={data} key={data.id}/>)}
        </CardBoard>
    )
}

export default FavoritesCardBoard;

