import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify'
import { CurrentLocation } from "./components/CurrentLocation";
import { DailyChart } from "./components/DailyChart";
import { DailyMoreInformation } from "./components/DailyMoreInformation";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { InputLocation } from "./components/InputLocation";
import { SelectorButtons } from "./components/SelectorButtons";
import { Sidebar } from "./components/Sidebar";
import { WeeklyWeather } from "./components/WeeklyWeather";
import { FavoritesProvider } from "./hooks/useFavorites";
import { WeatherProvider } from "./hooks/useWeather";
import { MainContainer } from "./style/appStyle";
import { GlobalStyle } from "./style/global";

function App() {

	const [isShowingMoreInformation, setIsShowingMoreInformation] = useState(false)

	// checks if the screen is of a mobile device and show the more info section
	// charts are not displayed in mobile devices
	useEffect(() => {
		if (screen.width < 480) {
			setIsShowingMoreInformation(true)
		}
	}, [screen])

	return (
		<>
			<GlobalStyle />
			<WeatherProvider>
				<FavoritesProvider>
					<ToastContainer />
					<Header />
					<InputLocation />
					<CurrentLocation />
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
					<Footer />
				</FavoritesProvider>
			</WeatherProvider>
		</>
	)
}

export default App
