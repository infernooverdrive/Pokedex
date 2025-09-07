import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import PokemonIndex from './pokemon/pages/PokemonIndex';
import PokemonDetails from './pokemon/pages/PokemonDetails/PokemonDetails';
function App() {


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="pokemon">
          <Route index element={<PokemonIndex />} />
          <Route path="details/:name" element={<PokemonDetails />} />
        </Route>
        <Route path="natures">
          <Route index element={<h1>TBA</h1>} />
        </Route>
        <Route path="*" element={<h1>Not found</h1>} />
      </Route>
    </Routes>
  )
};

export default App;
