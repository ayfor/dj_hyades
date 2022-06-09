import { useState, useEffect } from "react";
import GenreButton from "./GenreButton";

const { genres } = require("../data/genres.json");

const GenreSelection = ({ handleGenreSelect, genreIsSelected }) => {
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
	}, []);

	return (
		<div className="container flex flex-row justify-center items-center flex-wrap">
			{displayedGenres.map((genre) => (
				<GenreButton
					key={genre}
					genre={genre}
					handleGenreSelect={handleGenreSelect}
					genreIsSelected={genreIsSelected}
				/>
			))}
		</div>
	);
};

export default GenreSelection;
