import './App.css';
import Navbar from './Navbar'
import GenreButton from './GenreButton'

function App() {
  return (
    <div className="App">
        <Navbar />
        <div className="container container-main py-5">'
          <div className="flex flex-col items-center">
            <GenreButton genre="Test" enabled ="true"/>
          </div>
        </div>
    </div>
  );
}

export default App;
