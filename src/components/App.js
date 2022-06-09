import "./App.css";
import PlaylistBrowser from "./pages/PlaylistBrowser";
import ThemeMapper from "./data/ThemeMapper";

function App() {
	return (
		<ThemeMapper>
			<div className="App">
				<PlaylistBrowser />
			</div>
		</ThemeMapper>
	);
}

export default App;
