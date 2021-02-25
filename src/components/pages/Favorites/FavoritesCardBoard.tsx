  //@ts-nocheck
import React, {useState, useContext} from 'react'
import { AiFillDelete} from "react-icons/ai";
import imgPlaceholder from '../../../assets/default.jpg'

import CardBoard from '../../cardBoard';
import {Img} from '../../shared/ImageElements'
import {FavoritesTrashcan, MovieTitle, RemoveButton, FavoriteCardContainer,FavoritesCard} from './FavortiesElements'
import Icon from '../../icon';
import {MoviesContext} from '../../../contexts/MoviesContext'
import { IMovieData } from '../../../frontEndTypes';

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
            <FavoritesCard>
                <FavoritesTrashcan  isVisible={active} onClick={()=>removeFromFavorites(data.id)}>
                        <RemoveButton>  
                            <Icon color='white' size='30px'>
                                <AiFillDelete/>
                            </Icon>
                        </RemoveButton>
                </FavoritesTrashcan>
                <Img as='img' src={data.picture || imgPlaceholder} alt={data.title}></Img>
                <MovieTitle>{data.title}</MovieTitle>
            </FavoritesCard>
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

