//@ts-nocheck
import styled from 'styled-components';


export const CardContainer = styled.div`
background-color: black;
margin: ${(props) => props.margin};
border-radius:10px;
width: ${(props) => props.width};
height: ${(props) => props.height};
box-shadow: 0px 0px 10px 10px  #1f1d1d;
position:relative;
&:hover {
    background: rgba(255,255,255,0.04);
    box-shadow: -1px 1px 10px 1px #828282, 1px -1px 10px 1px #828282;
    filter: brightness(50%);
}
@media (max-width: 376px) {
max-width:18rem;
height:fit-content;
}
`

