import React from 'react'

import {CenterElements} from '../../Shared/CenterElements'
import Card from '../../Card'
import MovieInfoContent from '../../MovieInfoContent'
import Button from '../../Button'
import { MovieContentWrapper, MovieDataColumn } from './MoviepageComponents'
import { useHistory } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const MovieInfoCard = (props:any) => {

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
                        bg="#b93232"
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