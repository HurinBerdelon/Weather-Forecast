import { Container } from "./style";

interface SidebarProps {
    alert: {
        sender: string
        event: string
        start: string
        end: string
        description: string
    }[]
}

export function Sidebar(): JSX.Element {

    return (
        <Container>
            <h2>Alerts</h2>
            <div className="alert">
                <h3>Sender: <span>Instituto Nacional de Meteorologia</span></h3>
                <p>Event: <span>Declínio de Temperatura</span></p>
                <p>Start: <span>12:15 13/07/2022</span></p>
                <p>End: <span>12:15 13/07/2022</span></p>
                <p className="description">
                    INMET publica aviso iniciando em: 12/07/2022 21:00. Leve risco à saúde. Declínio entre 3ºC e 5ºC.
                </p>
            </div>

            <div className="alert">
                <h3>Sender: <span>Instituto Nacional de Meteorologia</span></h3>
                <p>Event: <span>Declínio de Temperatura</span></p>
                <p>Start: <span>12:15 13/07/2022</span></p>
                <p>End: <span>12:15 13/07/2022</span></p>
                <p className="description">
                    INMET publica aviso iniciando em: 12/07/2022 21:00. Leve risco à saúde. Declínio entre 3ºC e 5ºC.
                </p>
            </div>
        </Container>
    )
}