import React from 'react'
import Background from '../../Background/Index'
import Navbar from '../../Navbar'
import {Text, Paragraph, Trend } from './HomepageComponents'
import CardBoard from './CardBoard'
import Button from '../../Button'


 const Home = () => {
    return (
        <React.Fragment>
            <Background>
                <Navbar/>
                <Text>The movie app </Text>
                <Paragraph>For all the movie lovers to enjoy</Paragraph>
                <Button 
                    margin='auto 3rem'
                    bg='#00b300'
                    fontSize='20px'
                    width='12rem'
                    height='3rem'
                    >
                    Trending
                </Button>
            </Background>
            <CardBoard/>
        </React.Fragment>
    )
}
export default Home;
