import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    border: 1px solid #000;
    border-radius: 0.25rem;

    width: 120px;
    padding: 0.5rem;
    
    svg {
        font-size: 3rem;
    }

    .weather {
        font-size: 1.25rem;
        font-weight: 600;
        letter-spacing: 0.1rem;
    }

    .temperature {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
`