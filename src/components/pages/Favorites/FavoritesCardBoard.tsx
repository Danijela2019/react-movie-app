  //@ts-nocheck
import React, {useState, useContext} from 'react'
import { AiFillDelete} from "react-icons/ai";

import Card from '../../card';
import CardBoard from '../../cardBoard';
import {Img} from '../../shared/ImageElements'
import {FavoritesTrashcan, MovieTitle, RemoveButton} from './FavortiesElements'
import Icon from '../../icon';
import {MoviesContext} from '../../../contexts/MoviesContext'
import { IMovieData } from '../../../types';



const FavoriteCard = ({data}: IMovieData) => {
    const [active, setActive] = useState(false);
  
    const { removeFromFavorites} = useContext(MoviesContext);
    return(
        <div onMouseEnter={e => {
            e.preventDefault
            setActive(true);
            }}
            onMouseLeave={e => {
                e.preventDefault
            setActive(false)
            }}>
            <Card
                margin='2rem 1rem'  
                width='15rem'
                height='27rem'
                >
                <FavoritesTrashcan  isVisible={active} onClick={()=>removeFromFavorites(data.id)}>
                        <RemoveButton>  
                            <Icon color='white' size='30px'>
                                <AiFillDelete/>
                            </Icon>
                        </RemoveButton>
                </FavoritesTrashcan>
                <Img as='img' src={data.picture} alt={data.title}></Img>
                <MovieTitle>{data.title}</MovieTitle>
            </Card>
        </div>
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

