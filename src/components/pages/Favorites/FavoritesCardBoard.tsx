
//@ts-nocheck
import React, {useState} from 'react'
import Card from '../../Card';
import CardBoard from '../../CardBoard';
import movieData from '../../../data/movies';
import {Img} from '../../Shared/ImageElements'
import {FavoritesBackground,FavoritesTrashcan, MovieTitle, RemoveButton} from './FavortiesElements'
import Icon from '../../Icon';
import { AiTwotoneDelete} from "react-icons/ai";


const FavoriteCard = (props:any) => {
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
                                <AiTwotoneDelete/>
                            </Icon>
                        </RemoveButton>
                </FavoritesTrashcan>
                <Img as='img' src={props.data.src} alt={props.data.alt}></Img>
                <MovieTitle>{props.data.alt}</MovieTitle>
            </Card>
        </div>
    )
}
const favoritesMovieCards = movieData.map((data, index) => <FavoriteCard data={data} key={index} />);

const FavoritesCardBoard = () => {
    return (
        <CardBoard>
           {favoritesMovieCards}
        </CardBoard>
    )
}


export default FavoritesCardBoard;

