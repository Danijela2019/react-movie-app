//@ ts-nocheck
import React from 'react'
import Background from '../../Background/Index'
import Navbar from '../../Navbar'
import {Text, Paragraph, Img,Trend} from './HomepageComponents'
import CardBoard from '../../CardBoard'
import Button from '../../Button'
import Card from '../../Card'
import movieData from '../../../data/movies';
import cover from '../../../assets/it.png'
import InfoCardsBoard from './InfoCardsBoard'
import Footer from '../../Footer'

const MovieCard = (props:any) => {
    return (
        <Card width='auto' height='16rem' margin='1rem 0.5rem'>
             <Img as='img' src={props.data.src} alt={props.data.alt}></Img>
        </Card>
    )
};

const movieCards = movieData.map((data, index) => <MovieCard data={data} key={index} />);

const Home = () => {
    return (
        <React.Fragment>
            <Background cover={cover}>
                <Navbar/>
                <Text>The movie app </Text>
                <Paragraph>For all the movie lovers to enjoy</Paragraph>
                <Button 
                    margin='auto 3rem'
                    bg="#13b300"
                    fontSize='20px'
                    width='12rem'
                    height='3rem'
                    >
                    Trending
                </Button>
            </Background>
            
            <CardBoard>
                <InfoCardsBoard/>
            </CardBoard>
            <Trend>TRENDING</Trend>
            <CardBoard>
                {movieCards}
            </CardBoard>
            
           
            <Footer/>
        </React.Fragment>
    )
}
export default Home;
