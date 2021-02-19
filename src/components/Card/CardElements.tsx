import styled from 'styled-components';
import { ICardContainer } from '../../frontEndTypes';

export const CardContainer = styled.div<ICardContainer>`
background-color:var(--color-background);
margin: ${(props) => props.margin};
border-radius:5px;
width: ${(props) => props.width};
height: ${(props) => props.height};
box-shadow: 0px 0px 10px 10px  #1f1d1d;
&:hover{
    background: #d6d0d0;
    box-shadow: -2px 3px 12px 3x #e4e0e0, 3px -1px 15px 3px whitesmoke;
}  
@media (max-width: 376px) {
max-width:18rem;
height:fit-content;
}
`

