import { useState, useEffect } from "react";

const SearchButton = ({ weather, color, searchTermSet }) => {
	const [buttonClass, setButtonClass] = useState();

	const handlePlaylistSearchClick = () => {
		const getSpotifyPlaylists = () => {
			if (searchTermSet.size > 0) {
				let searchTermQuery =
					Array.from(searchTermSet).join("+") + `+${weather}`;
				let url =
					"https://api.spotify.com/v1/search?type=playlist&limit=20&q=" +
					encodeURIComponent(searchTermQuery);

				fetch(url)
					.then((response) => response.json())
					.then((data) => {
						console.log(data);
					});
			}
		};
		getSpotifyPlaylists();
	};

	//Effect that sets color of button
	useEffect(() => {
		if (color) {
			const newThemeColor = color.split("-")[0];

			const newButtonClass = `bg-${newThemeColor}-500 hover:bg-${newThemeColor}-400 text-white font-bold py-2 px-4 border-b-4 border-${newThemeColor}-700 hover:border-${newThemeColor}-500 rounded-full`;

			setButtonClass(newButtonClass);
		}
	}, [color]);

	return (
		<button className={buttonClass} onClick={handlePlaylistSearchClick}>
			Search Playlists
		</button>
	);
};

export default SearchButton;
