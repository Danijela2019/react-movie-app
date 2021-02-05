// @ts-nocheck
import React from 'react';
import { IconContext } from 'react-icons';

const Icon = ({ children, color, size }) => {
    return (
        <IconContext.Provider value={{ style: { fontSize: `${size}`, color: `${color}` } }}>
            <div>{children}</div>
        </IconContext.Provider>
    );
};

export default Icon;