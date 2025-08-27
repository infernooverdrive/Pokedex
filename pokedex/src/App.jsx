import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import PokemonIndex from './pokemon/PokemonIndex';
function App() {


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/pokemon">
          <Route index element={<PokemonIndex />} />
        </Route>
      </Route>
    </Routes>
  )
};

export default App;
