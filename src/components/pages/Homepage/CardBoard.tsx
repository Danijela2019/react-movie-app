import React from 'react'
import Card from '../../Card'
import {CardsWrapper,Img} from './HomepageComponents'

import movieData from '../../../data/movies';

const MovieCard = (props:any) => {
    return (
        <Card>
             <section>
                <Img as='img' src={props.data.src} alt={props.data.alt}></Img>
             </section>
        </Card>
    )
};

const movieCards = movieData.map((data, index) => <MovieCard data={data} key={index} />);


 const CardBoard = () => {
    return (
        <CardsWrapper >
            {movieCards}
        </CardsWrapper>
    )
}

export default CardBoard;