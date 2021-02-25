import React from 'react'
import { FormContainer,Form, FormField } from './FormElements';

export const FormWrapper = (props:any) => {
    return (
        <FormContainer>
            <Form>
              {props.children}
            </Form>
        </FormContainer>
    )
}

export default FormWrapper;