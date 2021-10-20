import './App.css';
import Navbar from './Navbar'
import GenreButton from './GenreButton'

function App() {
  return (
    <div className="App">
        <Navbar />
        <div className="container-main py-5">
          <GenreButton genre="Test"/>
        </div>
    </div>
  );
}

export default App;
