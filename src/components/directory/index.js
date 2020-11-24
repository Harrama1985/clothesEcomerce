import React from 'react'

import {Container,MenuItem,BackgroundImg,Content,ContentTitle,ContentSubTitle} from './styles/directory'

export default function Directory({children,...restProps}) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Directory.MenuItem = function DirectoryMenuItem({title,imageUrl,size}){
    return <MenuItem size={size}>
        <BackgroundImg imageUrl={imageUrl}/>
        <Content>
            <ContentTitle>{title.toUpperCase()}</ContentTitle>
            <ContentSubTitle>Shop now</ContentSubTitle>
        </Content>
    </MenuItem>
}





