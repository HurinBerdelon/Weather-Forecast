import styled from "styled-components";

export const Container = styled.footer`
    color: var(--gray-900);
    background: var(--gray-200);
    padding: 0.5rem 0;
    margin-top: 0.5rem;

    display: flex;
    gap: 0.5rem;

    p {
        flex: 1;
        text-align: center;
    }

    svg {
        font-size: 1.25rem;
    }
`