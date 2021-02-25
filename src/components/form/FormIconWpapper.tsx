import React from 'react'
import Icon from '../icon';
import { FormIcon } from './FormElements';

const FormIconWrapper = (props:any) => {
    return (
        <FormIcon>
            <Icon size='20px' color='var(--color-background)'>
                {props.children}
            </Icon>
        </FormIcon>
    )
}

export default FormIconWrapper;
