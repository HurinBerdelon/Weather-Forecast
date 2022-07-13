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
                text: 'Weather forecast',
                color: '#121619',
                font: {
                    size: 20,
                    family: 'Poppins',
                },
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
        datasets: [
            {
                fill: true,
                label: 'Temperature',
                data: [17, 18, 21, 22, 14, 15, 20],
                borderColor: '#ff6200',
                backgroundColor: '#FF620055',
            },
            {
                fill: true,
                label: 'Temperature',
                data: [10, 9, 5, 3, 11, 12, 14],
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