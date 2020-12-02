import React from 'react'

import {Container,MenuItem,BackgroundImg,Content,ContentTitle,ContentSubTitle} from './styles/directory'

function Directory({children,...restProps}) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Directory.MenuItem = function DirectoryMenuItem({title,imageUrl,size,clicked,linkUrl}){
    return <MenuItem size={size}>
        <BackgroundImg imageUrl={imageUrl}/>
        <Content onClick={()=>clicked(linkUrl)}>
            <ContentTitle>{title.toUpperCase()}</ContentTitle>
            <ContentSubTitle >Shop now</ContentSubTitle>
        </Content>
    </MenuItem>
}

export default Directory



