import styled from "styled-components";

export const Container = styled.section`
    width: 800px;

    /* charts are small in screens with less then 840px */
    @media (max-width: 840px) {
        width: 600px;
    }

    /* charts are not shown in screens with less then 620px */
    @media (max-width: 620px) {
        display: none;
    }
`