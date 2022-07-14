import styled from "styled-components";

export const Container = styled.section`
    width: 800px;

    /* charts are not shown in screens with less then 480px */
    @media (max-width: 480px) {
        display: none;
    }
`