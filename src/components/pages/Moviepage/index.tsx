//@ts-nocheck
import React from 'react'
import Background from '../../Background/Index'
import { Background1, MovieImage, TitleContainer, ContentTextWrapper, MovieDataColumn,Wrapper,MovieInfo,PText} from './MoviepageComponents'
import {Trend} from '../../pages/Homepage/HomepageComponents'
import joker from './../../../assets/movies/joker.jpg'
import Navbar from '../../Navbar'
import Button from '../../Button'
import Card from '../../Card'
import Footer from '../../Footer'
import { SiImdb } from "react-icons/si";
import Icon from '../../Icon'

export const MoviePage = () => {
    return (
        <React.Fragment>
            <Background1 cover ={joker}>
            <Navbar/>
            <MovieImage as='img' src={joker} width="200px" height="auto" alt="Joker"/>
            <TitleContainer>
                <Trend>Joker</Trend>
             </TitleContainer>
            </Background1>
            <Wrapper>
            <Card width='100%' height='fit-content' margin='2rem 1rem'>
           
                <ContentTextWrapper>
                    <MovieDataColumn>
                        <Wrapper>
                        <Icon color='white' size='30px'>< SiImdb/></Icon>
                        <MovieInfo>7.3 | type | 2020 | 2h 30min</MovieInfo>
                        
                        </Wrapper>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, quidem? Quasi similique vitae quam laboriosam?</p>
                    
                    </MovieDataColumn>
                    <MovieDataColumn>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                    </MovieDataColumn>
                    <MovieDataColumn>
                    <Button 
                        margin='1rem 3rem'
                        bg="#13b300"
                        fontSize='15px'
                        width='8rem'
                        height='2rem'
                        >
                        Add to favorites
                </Button>
                    <Button 
                        margin='1rem 3rem'
                        bg="#b93232"
                        fontSize='15px'
                        width='8rem'
                        height='2rem'
                        >
                        Close
                </Button>
                </MovieDataColumn>
                </ContentTextWrapper>
             </Card>
             </Wrapper>
             <Footer/>
        </React.Fragment>
    )
}
