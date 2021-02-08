import React from 'react';
import {IPropsChildren} from '../../Types';
import styled from 'styled-components';

const Main = styled.main`
background:black`

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