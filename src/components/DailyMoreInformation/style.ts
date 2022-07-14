import styled from "styled-components";

export const Container = styled.section`

    width: 900px;
    display: flex;
    justify-content: space-evenly;
    margin: 1rem 0;
    border: 1px solid var(--gray-400);
    border-radius: 0.25rem;
    background: var(--gray-400);

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

            img {
                transform: scale(1.25);
            }

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

     /* on Devices less then 920px set the width to percentage */
    @media (max-width: 920px) {
        width: 95%;
    }

    /* On mobile devices, invert the orientation of the flex boxes and add border to each card, to better fit the visualization*/
    @media (max-width: 480px) {
        width: 100%;
        border: none;
        flex-direction: column;
        gap: 1rem;

        .leftBox, .rightBox, .middleBox {
            flex-direction: row;
            justify-content: center;
            gap: 0.5rem;

            div {
                border: 1px solid var(--gray-400);
                border-radius: 0.25rem;
            }

        }
    }
`