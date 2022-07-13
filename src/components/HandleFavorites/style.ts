import styled from "styled-components";

export const Container = styled.div`

    .favoritesButton {
        display: flex;
        align-items: center;
        gap: .25rem;

        color: var(--gray-900);

        svg {
            font-size: 1.25rem;
        }

        &:hover {
            filter: brightness(1.2);
        }
    }

    .menuItems {
        position: absolute;
        z-index: 1;
        right: 1rem;
        background: var(--gray-200);
        padding: 1rem;

        p {
            span {
                font-size: .8rem;
                display: block;
                text-align: justify;
                width: 150px;
            }
        }
        
        .favorite {
            
            display: flex;
            align-items: center;
            gap: 1rem;
            
            button {
                color: var(--gray-900);
                font-size: 1rem;
                padding: 0.25rem .5rem;
            }

            svg {
                margin: 0 .5rem;
                color: var(--red-500);

                &:hover{
                    cursor: pointer;
                    filter: brightness(0.8);
                }
            }
        }
    }
`