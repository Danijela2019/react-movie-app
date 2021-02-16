//@ts-nocheck
import React from 'react'

import {CenterElements} from '../../shared/CenterElements'
import Card from '../../card'
import MovieInfoContent from '../../movieInfoContent'
import Button from '../../button'
import { MovieContentWrapper, MovieDataColumn } from './MoviepageElements'
import { useHistory } from 'react-router-dom'

const MovieInfoCard = () => {

    let history = useHistory();
    const redirectToHome = () => {
        history.goBack();
    }
    
    return (
        <CenterElements>
            <Card width='100%' height='fit-content' margin='2rem 1rem'>
            <MovieContentWrapper>
              <MovieInfoContent/> 
               <MovieDataColumn>
                    <Button 
                        margin='1rem 3rem'
                        bg="#13b300"
                        fontSize='15px'
                        width='130px'
                        height='2rem'
                        >
                        Add to favorites
                    </Button>
                    <Button 
                        margin='1rem 3rem'
                        bg="var(--color-danger)"
                        fontSize='15px'
                        width='130px'
                        height='2rem'
                        clicked={redirectToHome}
                        >
                        Close
                    </Button>
                </MovieDataColumn>
            </MovieContentWrapper>
            </Card>
     </CenterElements>
    )
}

export default MovieInfoCard;