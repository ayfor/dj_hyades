import "./App.css";
import Navbar from "./Navbar";
import PlaylistBrowser from "./pages/PlaylistBrowser";
import ThemeMapper from "./data/ThemeMapper";


function App() {
	return (
		<ThemeMapper>
			<div className="App">
				<Navbar />
				<PlaylistBrowser />
			</div>
		</ThemeMapper>
	);
}

export default App;
