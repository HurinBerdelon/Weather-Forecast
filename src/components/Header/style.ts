import styled from "styled-components";

export const Container = styled.header`
    color: var(--gray-900);
    margin: 1rem;
    text-align: center;

    /* removes the margin and set the width to full screen in mobile devices */
    @media (max-width: 480px) {
        margin: 0;
        padding: 0.5rem 0;
        width: 100vw;
    }
`