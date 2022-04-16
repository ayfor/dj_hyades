import GenreSelection from "../GenreSelect/GenreSection";
import { useTheme } from "../data/ThemeMapper";

const PlaylistBrowser = () => {
	const { weather, color } = useTheme();
	return (
		<div className="container container-main py-5">
			<div className="flex flex-col items-center">
				<GenreSelection />
				<>
					Current Weather: {weather}, {color}
				</>
			</div>
		</div>
	);
};

export default PlaylistBrowser;
