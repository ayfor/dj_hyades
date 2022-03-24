import { useState, useEffect } from "react";
import GenreSelection from "../GenreSelect/GenreSection";

const PlaylistBrowser = () => {
	const [userLocation, setUserLocation] = useState({
		lat: 45.421532,
		lng: -75.697189,
	});

	const [currentWeather, setCurrentWeather] = useState("unknown");

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
						setCurrentWeather(data.weather[0].main);
					}
				});
		};

		getCurrentWeather();
	}, [userLocation]);

	return (
		<div className="container container-main py-5">
			<div className="flex flex-col items-center">
				<GenreSelection />
				<>Current Weather: {currentWeather}</>
			</div>
		</div>
	);
};

export default PlaylistBrowser;
