import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        min-width: 100vw;
        min-height: 100vh;
    }

    body, input, button {
        font-family: 'Poppins', sans-serif;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        cursor: pointer;
        border: none;
        background: none;
    }
`