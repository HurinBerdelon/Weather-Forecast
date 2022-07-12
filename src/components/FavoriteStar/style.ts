import styled from "styled-components";

export const Container = styled.div`

    svg {
        font-size: 1.5rem;

        &:hover{
            cursor: pointer;
            filter: brightness(0.8);
        }
    }

    .isFavorite {
        color: #ff0;
    }
`