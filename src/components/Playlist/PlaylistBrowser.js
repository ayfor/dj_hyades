import { useState } from "react";
import { useTheme } from "../data/ThemeMapper";
import GenreSelection from "../GenreSelect/GenreSection";

const PlaylistBrowser = ({ availableGenres }) => {
	const [selectedGenres, setSelectedGenres] = useState(new Set());
	const { weather, color } = useTheme();

	function handleGenreSelect(genre, isEnabled) {
		if (isEnabled) {
			selectedGenres.add(genre);
		} else {
			selectedGenres.delete(genre);
		}
	}

	return (
		<div className="container container-main py-5">
			<div className="flex flex-col items-center">
				<>
					Current Weather: {weather}, {color}
				</>
			</div>
		</div>
	);
};

export default PlaylistBrowser;
