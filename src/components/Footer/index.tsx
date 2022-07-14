import { GithubLogo, LinkedinLogo } from "phosphor-react";

import { Container } from "./style";

export function Footer(): JSX.Element {

    return (
        <Container>
            <p>Developed by <></>Fernando Cardozo - 2020</p>
            <a target='_blank' href="https://github.com/HurinBerdelon"><GithubLogo /></a>
            <a target='_blank' href="https://www.linkedin.com/in/fernando-henrique-p-cardozo/"><LinkedinLogo /></a>
        </Container>
    )
}