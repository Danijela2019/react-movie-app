import React from 'react';
import {IPropsChildren} from '../../Types';
import styled from 'styled-components';

const Main = styled.div`
background:black;
flex:1`

const Layout = (props: any) => {
    return (
        <React.Fragment>
            <Main>
                {props.children}
            </Main>
        </React.Fragment>
    )
}

export default Layout;