import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: flex-start;
    gap: 0.5rem;

    /* sets the max-width of weekly cards to 100% and enabled overflow to see all elements */
    @media (max-width: 980px) {
        padding: 0.5rem;
        max-width: 100%;
        overflow-x: auto;
    }
`