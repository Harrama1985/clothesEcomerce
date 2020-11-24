import React from 'react'
import {Button} from './styles/ButtonCustum'
export default function ButtonCustum({children,...restProps}) {
    return (
    <Button {...restProps}>{children}</Button>
    )
}

