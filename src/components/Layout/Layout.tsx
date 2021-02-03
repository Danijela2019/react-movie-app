import React from 'react';
import {IPropsChildren} from '../../Types';
import styled from 'styled-components';

const Main = styled.main`
height:100%
`


const Layout = (props: IPropsChildren) => {
    return (
        <React.Fragment>
            <main>
                {props.children}
            </main>
        </React.Fragment>
    )
}

export default Layout;