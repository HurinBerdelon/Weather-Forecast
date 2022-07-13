import { Container } from "./style";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useWeather } from "../../hooks/useWeather";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
)

export function DailyChart(): JSX.Element {

    const { forecast } = useWeather()

    if (!forecast.current) {
        return <></>
    }

    const options = {
        responsive: true,
        scales: {
            y: {
                ticks: {
                    color: '#121619'
                }
            },
            x: {
                ticks: {
                    color: '#121619'
                }
            }
        },
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text:
                    `Temperature and Rain Probability from ${forecast.hourly[0].dt} to ${forecast.hourly[forecast.hourly.length - 1].dt}`,
                color: '#121619',
                font: {
                    size: 20,
                    family: 'Poppins',
                },
            }
        }
    }

    const labels = forecast.hourly.map(hour => hour.dt)

    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'Temperature (ºC)',
                data: forecast.hourly.map(hour => hour.temp),
                borderColor: '#ff6200',
                backgroundColor: '#FF620055',
            },
            {
                fill: true,
                label: 'Rain Probability (%)',
                data: forecast.hourly.map(hour => hour.pop * 100),
                borderColor: '#1cd759',
                backgroundColor: '#1cd75955',
            }
        ]
    }

    return (
        <Container>
            <Line options={options} data={data} />
        </Container>
    )
}