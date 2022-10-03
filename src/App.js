import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from "./Components/Main";
import PokemonDetail from './Components/PokemonDetail';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
      </Routes>
    </div>
  );
}

export default App;
