import styled from "styled-components";

export const Container = styled.div`

    .favoritesButton {
        display: flex;
        align-items: center;
        gap: .25rem;

        svg {
            font-size: 1.25rem;
        }
    }

    .menuItems {
        position: absolute;
        z-index: 1;
        right: 1rem;

        background: #EEE;

        .favorite {

            display: flex;
            align-items: center;
            gap: 1rem;
            
            button {
                padding: 0.25rem 1rem;
            }

            svg {
                margin: 0 .5rem;

                &:hover{
                    cursor: pointer;
                    filter: brightness(0.8);
                }
            }
        }
    }
`