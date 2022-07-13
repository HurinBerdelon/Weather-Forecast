import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;

    svg {
        font-size: 1.5rem;

        &:hover{
            cursor: pointer;
            filter: brightness(1.2);
        }
    }

    .isFavorite {
        color: var(--yellow-500);
    }
`