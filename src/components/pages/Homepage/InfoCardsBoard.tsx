import React from 'react'
import {Title} from '../../Shared/TextElements'
import {HomeCardText,HomeCardContent} from './HomepageElements'
import Card from '../../Card'
import Icon from '../../Icon'
import cardData from '../../../data/cardData';


const InfoCard = (props:any) => {
    console.log(props.data.icon)
    return (
        <Card width='19rem' height='25rem' margin='4rem 0'>
            <HomeCardContent>
                <Title>{props.data.title}</Title>
                <Icon color="#00b371" size="50px">
                    {props.data.icon}
                </Icon>
                <HomeCardText>{props.data.text}</HomeCardText>
            </HomeCardContent>
        </Card>
    )
}

const InfoCards = cardData.map((data) => <InfoCard data={data} key={data.id} />);

const InfoCardsBoard = () => {
    return (
        <React.Fragment>
        {InfoCards}
        </React.Fragment>
    )
};

export default InfoCardsBoard;

