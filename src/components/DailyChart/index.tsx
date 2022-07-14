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

// Register elements of ChartJS to be used
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

    // returns a fragment if forecast state was not set yet, what means there was no searchs yet
    if (!forecast.current) {
        return <></>
    }

    // define the options of the plot object
    // can be found in https://www.chartjs.org/docs/latest/general/options.html
    const options = {
        responsive: true,
        // set a color to the ticks of the chart
        scales: {
            y: {
                ticks: {
                    color: '#121619'
                }
            },
            x: {
                ticks: {
                    color: '#121619',
                    maxTicksLimit: 10
                }
            }
        },
        // Add legend and title plugins
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

    // Define the labels, it means the X axis, with the dates of hourly forecast
    const labels = forecast.hourly.map(hour => hour.dt)

    // Define two datasets, the temperature and the probability of rain
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