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

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Weather forecast'
            }
        }
    }

    const labels = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ]

    const data = {
        labels,
        datasets: [{
            fill: true,
            label: 'Temperature',
            data: [17, 18, 21, 22, 14, 15, 20]
        }]
    }

    return (
        <Container>
            <Line options={options} data={data} />
        </Container>
    )
}