import React from 'react';
import {IPropsChildren} from '../../Types';

const Layout = (props: any) => {
    return (
        <React.Fragment>
            <main>
                {props.children}
            </main>
        </React.Fragment>
    )
}

export default Layout;