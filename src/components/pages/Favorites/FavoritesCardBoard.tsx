
//@ts-nocheck
import React, {useState, useContext} from 'react'
import { AiFillDelete} from "react-icons/ai";
import { useHistory } from 'react-router-dom';

import Card from '../../Card';
import CardBoard from '../../CardBoard';
import movieData from '../../../data/movies';
import {Img} from '../../Shared/ImageElements'
import {FavoritesTrashcan, MovieTitle, RemoveButton} from './FavortiesElements'
import Icon from '../../Icon';
import {MoviesContext} from '../../../contexts/MoviesContext'



const FavoriteCard = ({data}) => {
    const [active, setActive] = useState(false);

    const RemoveCardHandler = () => {
        console.log('I was clicked')
    }

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
                <FavoritesTrashcan  isVisible={active} onClick={RemoveCardHandler} >
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
    const { favoriteMovies } = useContext(MoviesContext);
    return (
        <CardBoard>
            {favoriteMovies.map((data) => <FavoriteCard data={data} key={data.id} />)}
        </CardBoard>
    )
}


export default FavoritesCardBoard;

