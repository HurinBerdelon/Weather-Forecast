import { DailyChart } from "./components/DailyChart";
import { InputLocation } from "./components/InputLocation";
import { WeeklyWeather } from "./components/WeeklyWeather";
import { MainContainer } from "./style/appStyle";
import { GlobalStyle } from "./style/global";

function App() {

	return (
		<>
			<GlobalStyle />
			<InputLocation />
			<MainContainer>
				<WeeklyWeather />
				<DailyChart />
			</MainContainer>
			<aside></aside>
		</>
	)
}

export default App
