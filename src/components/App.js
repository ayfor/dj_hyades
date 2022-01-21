import './App.css';
import Navbar from './Navbar'
import GenreSelection from './GenreSelect/GenreSection';

function App() {
  return (
    <div className="App">
        <Navbar />
        <div className="container container-main py-5">
          <div className="flex flex-col items-center">
            <GenreSelection/>
          </div>
        </div>
    </div>
  );
}

export default App;
