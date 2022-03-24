import { FaCheck } from "react-icons/fa";

function GenreButton({ genre }) {
	return (
		<div className="w-max my-2 mx-1 py-2 px-4 font-semibold rounded-lg shadow-md outline-green text-green-400 hover:text-white hover:bg-green-400 active:bg-green-700 cursor-pointer">
			<div className="flex flex-row justify-center items-center">
				<FaCheck />{" "}
				<div className="pl-3" key={genre}>
					{" "}
					{genre}
				</div>
			</div>
		</div>
	);
}

export default GenreButton;
