import React, { useState, useEffect, useContext } from "react";

//Create theme context
export const ThemeContext = React.createContext();

//Create a custom hook to enable easy access to theme data
export const useTheme = () => useContext(ThemeContext);

const ThemeMapper = ({ children }) => {
	const [userLocation, setUserLocation] = useState({
		lat: 45.421532,
		lng: -75.697189,
	});

	const [currentTheme, setCurrentTheme] = useState("default");

	//Get user location from browser
	useEffect(() => {
		const getUserLocation = () => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					// Callback function sets local user location state
					(position) => {
						setUserLocation({
							lat: position.coords.latitude,
							lng: position.coords.longitude,
						});
					},
					//Error callback sets local user location state to default values
					() => {
						setUserLocation({
							lat: 45.421532,
							lng: -75.697189,
						});
					}
				);
			}
		};

		getUserLocation();
	}, []);

	useEffect(() => {
		const getCurrentWeather = () => {
			fetch(
				`https://api.openweathermap.org/data/2.5/weather?lat=${userLocation.lat}&lon=${userLocation.lng}&appid=${process.env.REACT_APP_OPENWEATHER_API_TOKEN}`
			)
				.then((response) => response.json())
				.then((data) => {
					if (data.weather[0].main) {
						const weather = data.weather[0].main;
						mapThemeFromWeather(weather);
					}
				});
		};

		getCurrentWeather();
	}, [userLocation]);

	function mapThemeFromWeather(weather) {
		let weatherThemeMap = require("./weatherThemeMap.json");
		console.log(weatherThemeMap);
		const theme = weatherThemeMap.find(
			(element) => element.weather === weather
		);
		setCurrentTheme(theme);
	}

	return (
		<ThemeContext.Provider value={currentTheme}>
			{" "}
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeMapper;
