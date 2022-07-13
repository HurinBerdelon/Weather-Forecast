import { useState } from "react";
import { DailyChart } from "./components/DailyChart";
import { DailyMoreInformation } from "./components/DailyMoreInformation";
import { InputLocation } from "./components/InputLocation";
import { SelectorButtons } from "./components/SelectorButtons";
import { Sidebar } from "./components/Sidebar";
import { WeeklyWeather } from "./components/WeeklyWeather";
import { MainContainer } from "./style/appStyle";
import { GlobalStyle } from "./style/global";

function App() {

	const [isShowingMoreInformation, setIsShowingMoreInformation] = useState(false)

	return (
		<>
			<GlobalStyle />
			<InputLocation />
			<MainContainer>
				<main>

					<WeeklyWeather />
					<SelectorButtons
						isShowingMoreInformation={isShowingMoreInformation}
						setIsShowingMoreInformation={setIsShowingMoreInformation}
					/>
					{isShowingMoreInformation
						? <DailyMoreInformation />
						: <DailyChart />
					}
				</main>
				<Sidebar />
			</MainContainer>
		</>
	)
}

export default App
