import React from 'react'
import {Title,SubTitle} from './styles/TitleForm'

function TitleForm({title,subTitle}) {
    return (
        <>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
        </>
    )
}

export default TitleForm
