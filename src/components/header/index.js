import React from 'react'
import { Link } from 'react-router-dom'
import {Container,Logo,NavBar,Item} from './styles/header'
import {ReactComponent as LogoImg} from '../../assets/crown.svg'
export default function Header({children,...restProps}) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}
Header.Logo = function HeaderLogo({...restProps}){
    return <Link to='/'>
        <Logo {...restProps}> <LogoImg /></Logo>
    </Link>
}
Header.NavBar = function HeaderNavBar({children,...restProps}){
    return <NavBar {...restProps}>{children}</NavBar>
}
Header.Item = function HeaderItem({children,...restProps}){
    return <Item ><Link {...restProps}>{children}</Link></Item>
}



