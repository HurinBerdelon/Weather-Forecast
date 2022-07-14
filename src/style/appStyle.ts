import styled from "styled-components";

export const MainContainer = styled.div`

    display: flex;
    justify-content: center;
    flex: 1;

    main {
        width: 75%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /* on mobile devices give the mainContainer a flex-direction column and main tag full width */
    @media (max-width: 1280px) {
        flex-direction: column;

        main {
            width: 100%;
        }
    }

    /* on mobile devices give the mainContainer a flex-direction column and main tag full width */
    @media (max-width: 480px) {
        flex-direction: column;

        main {
            width: 100%;
        }
    }

`