import styled from "styled-components";

export const Container = styled.div`

    button {
        display: flex;
    }

    .infoContent {

        position: absolute;
        z-index: 1;
        right: 0;
        background: var(--gray-400);
        width: 200px;

        p {
            font-size: 1rem;
            font-weight: 400;
            padding: 1rem;
            text-align: justify;
        }
    }
`