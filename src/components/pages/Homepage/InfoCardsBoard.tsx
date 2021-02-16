import React from 'react'

import {Title} from '../../shared/TextElements'
import {HomeCardText,HomeCardContent, InfoCardContainer} from './HomepageElements'
import Icon from '../../icon'
import {cardData} from '../../../data/card_data';
import { IInfoCardProps } from '../../../types';


const InfoCard = (props:IInfoCardProps) => {
    return (
        <InfoCardContainer>
            <HomeCardContent>
                <Title>{props.data.title}</Title>
                <Icon color='var(--color-primary)' size="50px">
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

