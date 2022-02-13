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

`

export default GlobalStyle