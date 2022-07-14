import styled from "styled-components";

export const Container = styled.section`

    margin: 1rem 0;
    display: flex;
    align-items: center;
    gap: .5rem;
    padding-right: .5rem;
    border: 1px solid var(--gray-400);
    border-radius: 0.25rem;

    background: #FFFFFF;
    
    div:first-of-type {

        flex: 1;
        border: none;
        outline: none;

        /* remove arrow selector of GooglePlacesAutocomplete component */
        div {
            div:last-child {
                svg {
                    display: none;
                }
            }
        }
    }

    @media (max-width: 1280px) {
        width: 95%;
        margin: 0 auto;
    }
`