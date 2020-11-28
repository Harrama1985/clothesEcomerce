import React from 'react'
import {Span} from './styles/ErrorComponent'
function ErrorComponent({children,...restProps}) {
    return (
    <Span {...restProps}> {children} </Span>
    )
}

export default ErrorComponent