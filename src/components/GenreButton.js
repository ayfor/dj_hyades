function GenreButton({ genre }) {

    return (
        <div className="w-min py-2 px-4 font-semibold rounded-lg shadow-md outline-green text-green-400 hover:text-white hover:bg-green-400 active:bg-green-700 cursor-pointer">
            { genre }
        </div>
    );
}

export default GenreButton;