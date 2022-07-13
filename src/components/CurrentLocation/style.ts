import styled from "styled-components";

export const Container = styled.div`

    button {
        display: flex;
        align-items: center;
        color: var(--gray-900);
    }

    svg {
        font-size: 1.5rem;
        color: var(--gray-900);

        &:hover{
            cursor: pointer;
            filter: brightness(3);
        }
    }
`