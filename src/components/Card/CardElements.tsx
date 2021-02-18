import styled from 'styled-components';
import { ICardContainer } from '../../frontEndTypes';

export const CardContainer = styled.div<ICardContainer>`
background-color:var(--color-background);
margin: ${(props) => props.margin};
border-radius:10px;
width: ${(props) => props.width};
height: ${(props) => props.height};
box-shadow: 0px 0px 10px 10px  #1f1d1d;
&:hover {
    background: #7a7878;
    box-shadow: -1px 1px 10px 1px #e4e0e0, 1px -1px 10px 1px #828282;
}  
@media (max-width: 376px) {
max-width:18rem;
height:fit-content;
}
`

