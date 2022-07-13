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
        width: 100%;
        max-width: 1280px;
        min-height: 100%;
        margin: 0 auto;
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