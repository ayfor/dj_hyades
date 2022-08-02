import { useState, useEffect } from "react";
import { useTheme } from "../data/ThemeMapper";
import PlaylistBrowser from "./PlaylistBrowser";

const Playlist = ({ token }) => {
	const [playlists, setPlaylists] = useState([]);

	const { weather, color } = useTheme();

	// const handlePlaylistSearchClick = () => {};

	useEffect(() => {
		const getSpotifyPlaylists = () => {
			if (weather != undefined) {
				let searchTermQuery = `${weather}`;
				let url = "https://api.spotify.com/v1/search?type=playlist&limit=20&q=" + encodeURIComponent(searchTermQuery);

				fetch(url, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
					.then((response) => response.json())
					.then((data) => {
						setPlaylists(data.playlists.items);
					});
			}
		};
		getSpotifyPlaylists();
	}, [weather]);

	return <PlaylistBrowser playlists={playlists} />;
};

export default Playlist;
