import { CloudSun } from 'phosphor-react'
import { Container } from "./style";

interface DailyCardProps {
    dailyWeather: {
        weather: string
        max: string
        min: string
        date: string
    }
    active?: boolean
}

export function DailyCard({ dailyWeather, active = false }: DailyCardProps): JSX.Element {

    return (
        <Container>
            <div className={active ? 'active' : ''}>
                <CloudSun />
                <span className='weather'>Rain</span>
                <p className='temperature'>max: <span>21 ºC </span></p>
                <p className='temperature'>min: <span>17 ºC </span></p>
                <p className='date'>Today</p>
            </div>
        </Container>
    )
}