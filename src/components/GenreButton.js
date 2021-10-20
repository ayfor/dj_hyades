
function GenreButton({ genre }) {
    return (
        <div className="w-min py-2 px-4 font-semibold rounded-lg shadow-md outline-green text-green-400">
            { genre }
        </div>
    );
}

export default GenreButton;