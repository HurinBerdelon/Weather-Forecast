import styled from "styled-components";

export const Container = styled.aside`

    border: 1px solid var(--gray-400);
    border-radius: 0.25rem;
    flex: 1;
    max-height: 90vh;
    margin-bottom: 1rem;
    overflow-Y: auto;

    h2 {
        text-align: center;
        color: var(--gray-900);
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

`