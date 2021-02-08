//@ts-nocheck
import React from 'react'
import Background from '../../Background/Index'
import Navbar from '../../Navbar'
import {Img, Trend} from '../Homepage/HomepageComponents'
import CardBoard from '../../CardBoard'
import Button from '../../Button'
import Card from '../../Card'
import movieData from '../../../data/movies';
import cover from '../../../assets/it.png'
import Footer from '../../Footer'
import { CoverContainer2, PageContentWrapper,Div1,Card1, Container,Image,MovieText} from './SearchedItemsComponents'
import {ContentTextWrapper,MovieDataColumn,Wrapper, MovieInfo,} from '../Moviepage/MoviepageComponents'
import Icon from '../../Icon'
import { SiImdb } from "react-icons/si";

/*  <Image as='img'  src={props.data.src} alt={props.data.alt}></Image> */
const MovieCard2 = (props:any) => {
    return (
        <Card1>
              
              <ContentTextWrapper>
              <Image as='img'  src={props.data.src} alt={props.data.alt}></Image>
                    <MovieDataColumn>
                        <Wrapper>
                        <Icon color='white' size='30px'>< SiImdb/></Icon>
                        <MovieInfo>7.3 | type | 2020 | 2h 30min</MovieInfo>
                        
                        </Wrapper>
                    <MovieText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, quidem? Quasi similique vitae quam laboriosam?</MovieText>
                    
                    </MovieDataColumn>
                    <MovieDataColumn>
                    <MovieText>Lorem ipsum dolor sit amet consectetu</MovieText>
                    <MovieText>Lorem ipsum dolor sit amet consectetur nklklk jkj</MovieText>
                    <MovieText>Lorem ipsum dolor sit amet consectetur</MovieText>
                    <MovieText>Lorem ipsum dolor sit amet consectetur jjjljlkkjjkj</MovieText>
                    </MovieDataColumn>
                    <Button 
                        margin='1rem 3rem'
                        bg="#13b300"
                        fontSize='15px'
                        width='8rem'
                        height='2rem'
                        >
                        Add to favorites
                </Button>
            
                </ContentTextWrapper>
        </Card1>
    )
};

const movieCards2 = movieData.map((data, index) => <MovieCard2 data={data} key={index} />);

const SearchedItems = (props: any) => {
    return (
        <React.Fragment>
            <Div1>
                <Navbar/>
                <Container>
                    {movieCards2}
                </Container>
                <Footer/>
            </Div1>
        </React.Fragment>
    )

}

export default SearchedItems;