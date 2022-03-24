import GenreSelection from "../GenreSelect/GenreSection";

const PlaylistBrowser = () => {
	return (
		<div className="container container-main py-5">
			<div className="flex flex-col items-center">
				<GenreSelection />
			</div>
		</div>
	);
};

export default PlaylistBrowser;
