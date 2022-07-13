import { InputLocation } from "./components/InputLocation";
import { WeeklyWeather } from "./components/WeeklyWeather";
import { GlobalStyle } from "./style/global";

function App() {

	return (
		<>
			<GlobalStyle />
			<InputLocation />
			<WeeklyWeather />
		</>
	)
}

export default App
