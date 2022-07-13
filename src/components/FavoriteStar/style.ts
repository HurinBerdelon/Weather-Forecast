import styled from "styled-components";

export const Container = styled.div`

    button {
        
        display: flex;
        align-items: center;
        
        svg {
            font-size: 1.5rem;    
        }

        &:hover{
            cursor: pointer;
        }
        
        .isFavorite {
            color: var(--yellow-500);
        }
    }
`