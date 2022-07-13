import styled from "styled-components";

export const Container = styled.div`

    div {
        
        display: flex;
        flex-direction: column;
        align-items: center;
        
        border: 2px solid var(--gray-400);
        border-radius: 0.25rem;
        
        color: var(--gray-900);
        
        width: 110px;
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

        &.active {
            border: 2px solid var(--orange-500);
            color: var(--orange-500);
        }

        &:hover {
            cursor: pointer;
        }
    }
`