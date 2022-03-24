import GenreButton from "./GenreButton";

const { genres } = require("./genres.json");

const GenreSelection = () => {
	let genreSubset = [];

	//Randomly select a given number of genres from the 'genres' array
	for (let index = 0; index < 15; index++) {
		const randomIndex = Math.floor(Math.random() * (genres.length - 0 + 1) + 0);
		const randomlySelectedGenre = genres[randomIndex];

		genreSubset.push(randomlySelectedGenre);
	}

	return (
		<div className="container flex flex-row justify-center items-center flex-wrap">
			{genreSubset.map((genre) => (
				<GenreButton key={genre} genre={genre} />
			))}
		</div>
	);
};

export default GenreSelection;
