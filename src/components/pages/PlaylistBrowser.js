import { useState } from "react";
import { useTheme } from "../data/ThemeMapper";
import GenreSelection from "../GenreSelect/GenreSection";
import SearchButton from "../Search/SearchButton";

const PlaylistBrowser = ({ token }) => {
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
				<GenreSelection
					handleGenreSelect={handleGenreSelect}
					genreIsSelected={selectedGenres.size > 0}
				/>
				<SearchButton
					token={token}
					weather={weather}
					color={color}
					searchTermSet={selectedGenres}
				/>
				<>
					Current Weather: {weather}, {color}
				</>
			</div>
		</div>
	);
};

export default PlaylistBrowser;
