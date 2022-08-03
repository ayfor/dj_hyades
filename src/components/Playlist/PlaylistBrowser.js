import { useEffect, useState } from "react";
import { useTheme } from "../data/ThemeMapper";
import GenreSelection from "../GenreSelect/GenreSection";

const PlaylistBrowser = ({ playlists }) => {
	const [selectedGenres, setSelectedGenres] = useState(new Set());
	const [availablePlaylists, setAvailablePlaylists] = useState([]);
	const { weather, color } = useTheme();

	function handleGenreSelect(genre, isEnabled) {
		if (isEnabled) {
			selectedGenres.add(genre);
		} else {
			selectedGenres.delete(genre);
		}
	}

	useEffect(() => {
		console.log(playlists);
		const newAvailablePlaylists = playlists.map((playlist) => {
			return {
				name: playlist.name,
				description: playlist.description,
				creatorName: playlist.owner.display_name,
				imageUrl: playlist.images[0].url,
				id: playlist.id,
				tracks: playlist.tracks.total,
			};
		});

		setAvailablePlaylists(newAvailablePlaylists);
	}, [playlists]);

	return (
		<div className="container container-main py-5">
			<div className="flex flex-col items-center">
				<h1 className="text-3xl font-bold text-center">Playlists</h1>
				{availablePlaylists.length > 0 ? (
					<>
						{availablePlaylists.map((playlist) => {
							return (
								<div className="py-3" key={playlist.id}>
									<div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
										<a href="#">
											<img className="rounded-t-lg" src={playlist.imageUrl} alt="" />
										</a>
										<div className="p-5">
											<a href="#">
												<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{playlist.name}</h5>
											</a>
											<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{playlist.description}</p>
											<a
												href="#"
												className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
											>
												Read more
												<svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
													<path
														fill-rule="evenodd"
														d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
														clip-rule="evenodd"
													></path>
												</svg>
											</a>
										</div>
									</div>
								</div>
							);
						})}
					</>
				) : (
					<div className="text-center">No playlists found</div>
				)}
			</div>
		</div>
	);
};

export default PlaylistBrowser;
