import styled from "styled-components";

export const Container = styled.section`

    width: 900px;
    display: flex;
    justify-content: space-evenly;
    margin: 1rem 0;
    border: 1px solid var(--gray-400);
    border-radius: 0.25rem;

    .leftBox, .rightBox, .middleBox {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        color: var(--gray-900);

        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 120px;
            padding: .5rem 0;
            gap: 1rem;

            svg {
                font-size: 3rem;
            }

            p {
                display: flex;
                justify-content: space-between;
                width: 100%;

                span {
                    font-weight: 600;
                }
            }
        }
    }

    .rightBox {
        div {
            min-width: 140px;
            width: fit-content;
        }
    }
`