import "./App.css";
import { useEffect, useState } from "react";
import PlaylistBrowser from "./pages/PlaylistBrowser";
import ThemeMapper from "./data/ThemeMapper";

function App() {
	const [token, setToken] = useState("");
	const CLIENT_ID = "84d9870e8c0a430d946fa11ae9afb055";
	const REDIRECT_URI = "http://localhost:3000";
	const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
	const RESPONSE_TYPE = "token";

	useEffect(() => {
		const hash = window.location.hash;
		let token = window.localStorage.getItem("token");

		if (!token && hash) {
			token = hash
				.substring(1)
				.split("&")
				.find((elem) => elem.startsWith("access_token"))
				.split("=")[1];

			window.location.hash = "";
			window.localStorage.setItem("token", token);
		}

		setToken(token);
	}, []);

	const logout = () => {
		setToken("");
		window.localStorage.removeItem("token");
	};

	return (
		<ThemeMapper>
			{!token ? (
				<a
					href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
				>
					Login to Spotify
				</a>
			) : (
				<button onClick={logout}>Logout</button>
			)}
			<div className="App">
				<PlaylistBrowser token={token} />
			</div>
		</ThemeMapper>
	);
}

export default App;
