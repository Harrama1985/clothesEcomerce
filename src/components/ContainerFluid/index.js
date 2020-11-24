import React from 'react'
import {Container} from './styles/ContainerFluid'
function ContainerFluid({children,...restProps}) {
    return (
    <Container {...restProps}>{children}</Container>
    )
}

export default ContainerFluid
