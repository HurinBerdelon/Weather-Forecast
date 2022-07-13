import styled from "styled-components";

export const Container = styled.div`
    max-width: 800px;
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 0.5rem;

    .selectorButton {
        width: 120px;
        border-radius: 0.25rem;
        font-size: 1rem;
        font-weight: 600;
        background: var(--gray-400);

        &.active {
            background: var(--orange-500);
        }

        &:hover {
            filter: brightness(1.2);
        }
    }
`