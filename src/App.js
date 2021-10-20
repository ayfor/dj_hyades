import './App.css';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
        <Navbar />
        <div className="container-main py-5">
          <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">Start</button>
        </div>
    </div>
  );
}

export default App;
