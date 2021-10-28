import Campo from './componentes/Campos';
import './App.css';

function App() {

  return (
    <header>
      <h1>Animes</h1>
      <Campo tipo="Shounen" />
      <Campo tipo="Seinen" />
      <Campo tipo="Shoujo" />
      <Campo tipo="Josei" />
    </header>
  );
}

export default App;
