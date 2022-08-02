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
				<h1 className="text-3xl font-bold text-center">Available Playlists</h1>
				{availablePlaylists.length > 0 ? (
					<>
						{availablePlaylists.map((playlist) => {
							return (
								<div className="py-3">
									<div className="overflow-hidden shadow-lg rounded-2xl h-90 w-64 m-auto">
										<img alt="playlist preview image" src={playlist.imageUrl} className="rounded-t-lg" />
										<div className="bg-white w-full p-4 relative">
											<button aria-label="Go to article" type="button" className="absolute rounded-full bg-indigo-500 text-white w-12 h-12 right-8 -top-6">
												<svg width="20" height="20" fill="currentColor" className="h-6 w-6 text-white mx-auto" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
													<path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
												</svg>
											</button>
											<p className="text-gray-800 text-xl font-medium mb-2">{playlist.name}</p>
											<p className="text-gray-600 text-xs">{playlist.description}</p>
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
