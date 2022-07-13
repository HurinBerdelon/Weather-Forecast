import styled from "styled-components";

export const Container = styled.div`
    max-width: 800px;
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 0.5rem;

    .selectorButton {
        width: 120px;
        border: 1px solid #000;
        border-radius: 0.25rem;
        font-size: 1rem;
        font-weight: 600;

        &.active {
            background: #ccc;
        }

        &:hover {
            filter: brightness(0.8);
        }
    }
`