import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --orange-500: #ff6200;
        --red-500: #ed3340;
        --yellow-500: #e9bb28;
        --green-500: #1cd759;
        
        --gray-100: #EEF5EE;
        --gray-200: #E2E4E2;
        --gray-400: #A4A7A4;
        --gray-900: #121619;

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100vw;
        max-width: 1280px;
        margin: 0 auto;

        #root {
            display: flex;
            flex-direction: column;
            background: var(--gray-100);
            min-height: 100vh;
        }
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