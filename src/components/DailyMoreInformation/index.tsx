import { Sun, SunHorizon, Wind, ArrowFatDown, ArrowFatUp, DropHalf } from 'phosphor-react'
import { Container } from "./style";

export function DailyMoreInformation(): JSX.Element {

    return (
        <Container>
            <div className='leftBox'>
                <div>
                    <Sun />
                    <p>Rain prob: <span>14%</span></p>
                </div>
                <div>
                    <ArrowFatUp />
                    <p>Max: <span>21ºC</span></p>
                </div>
                <div>
                    <ArrowFatDown />
                    <p>Min: <span>17ºC</span></p>
                </div>
            </div>

            <div className='middleBox'>
                <div>
                    <Wind />
                    <p>Wind: <span>10m/s</span></p>
                </div>
                <div>
                    <DropHalf />
                    <p>Humidity: <span>40%</span></p>
                </div>

            </div>

            <div className='rightBox'>
                <div>
                    <Sun />
                    <p>Sunrise <span>5:21</span></p>
                </div>

                <div>
                    <SunHorizon />
                    <p>Sunset <span>18:17</span></p>
                </div>
            </div>
        </Container>
    )
}