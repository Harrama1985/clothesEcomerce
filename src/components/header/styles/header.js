import styled from 'styled-components/macro'

export const Container = styled.div`
    padding: 0 60px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    @media screen and (max-width:800px){
        padding:0 20px;
    }
    @media screen and (max-width:500px){
        padding:0 10px;
    }
`;
export const Logo = styled.div`
padding :10px 0;
`;
export const NavBar = styled.ul`
    display: flex;
    align-items:center;
`;
export const Item = styled.li`
    font-size:1.8rem;
    font-weight:bold;
    opacity:.7;
    padding:10px 15px;
    transition:.5s;
a{
    color:black;
}
&:hover{
    opacity:1;
}
`;