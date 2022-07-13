import styled from "styled-components";

export const Container = styled.aside`

    border: 1px solid #000;
    flex: 1;

    h2 {
        text-align: center;
    }

    .alert {
        padding: 0.5rem 1rem;

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