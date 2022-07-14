import styled from "styled-components";

export const Container = styled.button`     

    .container {
        
        display: flex;
        flex-direction: column;
        align-items: center;
        
        border-radius: 0.25rem;
        
        width: 110px;
        padding: 0.5rem;
        
        color: var(--gray-900);
        background: var(--gray-400);
        
        svg {
            font-size: 3rem;
        }

        .imageContainer {
            img {
                transform: scale(1.25);
            }
        }

        .weekday {
            font-weight: 600;
        }
        
        .weather {
            font-size: 1.125rem;
            font-weight: 600;
            letter-spacing: 0.1rem;
        }

        p {
            font-size: .85rem;
        }
        
        .temperature {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
        }

        &.active {
            background: var(--green-500);
            color: var(--gray-100);
        }

        &:hover {
            cursor: pointer;
        }
    }
`