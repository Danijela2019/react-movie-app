
//@ts-nocheck
import React, {useState} from 'react'
import Card from '../../Card';
import CardBoard from '../../CardBoard';
import movieData from '../../../data/movies';
import {Img} from '../../Shared/ImageElements'
import {FavoritesBackground,FavoritesTrashcan, MovieTitle, RemoveButton,Tab} from './FavortiesElements'
import Icon from '../../Icon';
import { AiTwotoneDelete} from "react-icons/ai";




const FavoriteCard = (props:any) => {
    const [active, setActive] = useState(false);


    
    return(
        <React.Fragment>
    <Card
    margin='2rem 1rem'  
    width='15rem'
    height='27rem'
    >
               
            <FavoritesTrashcan>
                <Tab  active={active} onMouseEnter={e => {
                setActive(true);
                }}
                onMouseLeave={e => {
                setActive(false)
                }}>  
                    <Icon color='white' size='30px'>
                        <AiTwotoneDelete/>
                    </Icon>
                </Tab>
            </FavoritesTrashcan>
      
    
    <Img as='img' src={props.data.src} alt={props.data.alt}></Img>
    <MovieTitle>{props.data.alt}</MovieTitle>
   </Card>
   </React.Fragment>
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

