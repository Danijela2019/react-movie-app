//@ts-nocheck
import React from 'react'
import Background from '../../Background/Index'
import { Background1, MovieImage, ButtonContainer, ContentTextWrapper, MovieDataColumn,Wrapper,MovieInfo} from './MoviepageComponents'
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
            <ButtonContainer>
                <Button 
                        margin='auto 3rem'
                        bg="#13b300"
                        fontSize='20px'
                        width='15rem'
                        height='3rem'
                        >
                        Add to favorites
                </Button>
             </ButtonContainer>
            </Background1>
            <Card width='100%' height='16rem' margin='1rem 0'>
                <ContentTextWrapper>
                    <MovieDataColumn>
                        <Wrapper>
                        <Icon color='white' size='30px'>< SiImdb/></Icon>
                        <MovieInfo>7.3 | type | 2020 | 2h 30min</MovieInfo>
                        
                        </Wrapper>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, quidem? Quasi similique vitae quam laboriosam?</p>
                    <Button 
                        margin='auto 3rem'
                        bg="#e24d61"
                        fontSize='20px'
                        width='10rem'
                        height='3rem'
                        >
                        Close
                </Button>
                    </MovieDataColumn>
                    <MovieDataColumn>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                    </MovieDataColumn>
            
                </ContentTextWrapper>
             </Card>
             <Footer/>
        </React.Fragment>
    )
}
