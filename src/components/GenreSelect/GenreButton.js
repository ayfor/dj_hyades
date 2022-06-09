import { useState, useEffect } from "react";
import { useTheme } from "../data/ThemeMapper";
import { FaCheck, FaTimes } from "react-icons/fa";
function GenreButton({ genre, handleGenreSelect, genreIsSelected }) {
	const [isEnabled, setIsEnabled] = useState(false);

	const [selectedClasses, setSelectedClasses] = useState();
	const [unselectedClasses, setUnselectedClasses] = useState();

	const { weather, color } = useTheme();

	const handleClick = () => {
		setIsEnabled(!isEnabled);
		handleGenreSelect(genre, !isEnabled);
	};

	useEffect(() => {
		if (color) {
			let newThemeColor = color.split("-")[0];

			const selectedClass = `w-max my-2 mx-1 py-2 px-4 font-semibold rounded-lg shadow-md outline outline-${color} text-white bg-${newThemeColor}-400 hover:text-${newThemeColor} active:bg-${color} cursor-pointer`;

			const unselectedClass = `w-max my-2 mx-1 py-2 px-4 font-semibold rounded-lg shadow-md outline outline-${color} text-${newThemeColor}-400 hover:text-white hover:bg-${newThemeColor}-400 active:bg-${color} cursor-pointer`;

			setSelectedClasses(selectedClass);
			setUnselectedClasses(unselectedClass);
		}
	}, [color]);

	return (
		<>
			{isEnabled ? (
				<div
					onClick={() => {
						handleClick(genre);
					}}
					className={selectedClasses}
					style={{
						outlineStyle: "solid",
					}}
				>
					<div className="flex flex-row justify-center items-center">
						<FaTimes />{" "}
						<div className="pl-3" key={genre}>
							{" "}
							{genre}
						</div>
					</div>
				</div>
			) : (
				<>
					{genreIsSelected ? (
						<></>
					) : (
						<div
							onClick={() => {
								handleClick(genre);
							}}
							className={unselectedClasses}
							style={{
								outlineStyle: "solid",
							}}
						>
							<div className="flex flex-row justify-center items-center">
								<FaCheck />{" "}
								<div className="pl-3" key={genre}>
									{" "}
									{genre}
								</div>
							</div>
						</div>
					)}
				</>
			)}
		</>
	);
}

export default GenreButton;
