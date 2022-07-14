import styled from "styled-components";

export const Container = styled.aside`

    border: 1px solid var(--gray-400);
    border-radius: 0.25rem;
    flex: 1;
    max-height: 90vh;
    margin-bottom: 1rem;
    overflow-Y: auto;

    
    h2 {
        /* To allow the popover panel be absolute position reference this h2 */
        position: relative;

        color: var(--gray-900);
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        svg {
            height: 100%;
            color: var(--gray-900);
            font-size: 1.5rem;
        }
    }

    .alert {
        padding: 0.5rem 1rem;
        color: var(--gray-900);

        h3 {
            font-weight: 400;

            span {
                font-weight: 600;
            }
        }

        p {
            display: flex;
            justify-content: space-between;
            width: 100%;

            padding: 0.25rem 0;
            
            &.description {
                text-align: justify;
            }
        }
    }

    /* removes the internal overflow and adjust the padding and margin */
    @media (max-width: 1280px) {
        align-self: center;
        max-width: 800px;
        margin: .5rem;
        padding: 0.5rem;
        overflow: none;
    }
`