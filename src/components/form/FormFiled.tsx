import React from 'react'
import { FormField } from './FormElements';

export const FormFiled = (props:any) => {
    return (
        <FormField>
            {props.children}
        </FormField>
    )
}

export default FormFiled;
