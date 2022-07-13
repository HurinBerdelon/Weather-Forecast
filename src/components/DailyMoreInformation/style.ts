import styled from "styled-components";

export const Container = styled.section`

    max-width: 800px;
    display: flex;
    justify-content: space-evenly;
    margin-top: 1rem;
    border: 1px solid #000;
    border-radius: 0.25rem;

    .leftBox, .rightBox, .middleBox {
        display: flex;
        flex-direction: column;
        gap: 1rem;

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
`