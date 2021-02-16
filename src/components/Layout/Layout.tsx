import React from 'react';

import { ILayoutProps } from '../../types';
import { Main } from './LayoutElements';



const Layout = (props: ILayoutProps) => {
    return (
        <React.Fragment>
            <Main>
                {props.children}
            </Main>
        </React.Fragment>
    )
}

export default Layout;