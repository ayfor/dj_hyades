import { useState, useEffect } from "react";
import GenreButton from "./GenreButton";

const { genres } = require("../data/genres.json");

const GenreSelection = () => {
	const [selectedGenres, setSelectedGenres] = useState();

	const [displayedGenres, setDisplayedGenres] = useState([]);

	useEffect(() => {
		let genreSubset = [];
		//Randomly select a given number of genres from the 'genres' array
		for (let index = 0; index < 15; index++) {
			const randomIndex = Math.floor(
				Math.random() * (genres.length - 0 + 1) + 0
			);
			const randomlySelectedGenre = genres[randomIndex];

			genreSubset.push(randomlySelectedGenre);
		}

		setDisplayedGenres(genreSubset);
		setSelectedGenres(new Set());
	}, []);

	function handleGenreSelect(genre, isEnabled) {
		if (isEnabled) {
			selectedGenres.add(genre);
		} else {
			selectedGenres.delete(genre);
		}
	}

	return (
		<div className="container flex flex-row justify-center items-center flex-wrap">
			{displayedGenres.map((genre) => (
				<GenreButton
					key={genre}
					genre={genre}
					handleGenreSelect={handleGenreSelect}
					genreIsSelected={selectedGenres.size > 0}
				/>
			))}
		</div>
	);
};

export default GenreSelection;
