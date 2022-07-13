import styled from "styled-components";

export const Container = styled.div`
    margin: 1rem;
    max-width: 800px;
    display: flex;
    justify-content: center;
    gap: 1rem;

    .selectorButton {
        width: 120px;
        border-radius: 0.25rem;
        font-size: 1rem;
        font-weight: 600;
        background: var(--gray-400);
        opacity: 0.75;
        color: var(--gray-900);

        &.active {
            background: var(--green-500);
            opacity: 1;
            color: var(--gray-100);
        }

        &:hover {
            filter: brightness(1.2);
        }
    }
`