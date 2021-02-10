import React from 'react'
import {Title} from '../../Shared/TextElements'
import {HomeCardText,HomeCardContent, InfoCardContainer} from './HomepageElements'
import Icon from '../../Icon'
import {cardData} from '../../../data/cardData';


const InfoCard = (props:any) => {
    return (
        <InfoCardContainer>
            <HomeCardContent>
                <Title>{props.data.title}</Title>
                <Icon color="#00b371" size="50px">
                    {props.data.icon}
                </Icon>
                <HomeCardText>{props.data.text}</HomeCardText>
            </HomeCardContent>
        </InfoCardContainer>
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

