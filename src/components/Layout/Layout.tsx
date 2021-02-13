import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
background:var(--color-background);
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