import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    :root{
        --white: #F7F4EA;
        --black: #001021;
    }
    
    body,html{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: var(--white);
    }

    h1,
    h2,
    h3,
    p{
        padding: 0;
        margin: 0;
        color: var(--black);
    }
    h1,
    h2,
    h3 {
        font-family: 'Loro',sans-serif;
    }
    h1 {
        font-size: 1.8rem;
    }
    h2 {
        font-size: 1.6rem;
    }
    h3 {
        font-size: 1.4rem;
    }
    p {
        font-size: 1.2rem;
    }
    a{
        color: inherit;
        text-decoration: none;
    }
    p,
    a,
    button {
        font-family: 'Maitree', Verdana, Geneva, Tahoma, sans-serif;
        font-weight: 500;
    }

    button{
        border-style: none;
        background: inherit;
    }

`

export default GlobalStyle