import React from 'react'

import {InputForm} from './styles/Input'
export default function Input({label,...restProps}) {
    return (
        <InputForm>
            <label className={restProps.value.length ? 'shrink' : ''}>{label}</label>
            <input {...restProps}/>
        </InputForm>
    )
}

