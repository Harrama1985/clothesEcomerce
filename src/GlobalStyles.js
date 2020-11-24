import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle `
*{
    box-sizing:border-box;
    padding:0;
    margin:0;
}
body {
    
    font-family: 'Open Sans Condensed', sans-serif;
}
html{
    font-size:62.5%;
}
a{
    text-decoration:none;
}
li{
    list-style-type:none;
}
.signInUp{
    display:flex;
    justify-content:space-around;
    @media screen and (max-width:800px){
        flex-direction:column;
        justify-content:center;
        align-items:center;
        
    }
    form{
        margin-bottom:5rem;
        width:90%;
        max-width:400px;
        @media screen and (max-width:900px){
            width:90%;
    }
    }
}

`