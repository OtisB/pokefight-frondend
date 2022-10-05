import { Routes, Route } from 'react-router-dom';
import './App.css';
import './Glassmorphism.css';
import Main from "./Components/Main";
import PokemonDetail from './Components/PokemonDetail';
import FightingArea from './Components/FightingArea';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pokemon/:id" element={<FightingArea />} />
        {/* <Route path="/pokemon/:id" element={<PokemonDetail />} /> */}
      </Routes>
    </div>
  );
}

export default App;
