import React from 'react';
import { IconContext } from 'react-icons';
import { IIconProps } from '../../types'


const Icon = ( props : IIconProps) => {
    return (
        <IconContext.Provider value={{ style: { fontSize: `${props.size}`, color: `${props.color}` } }}>
            <div>{props.children}</div>
        </IconContext.Provider>
    );
};

export default Icon;