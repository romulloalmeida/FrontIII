import Campos from './componentes/Campos'
import './App.css';

function App() {
  
 
  return (
    <>
    <div className="App">
      <header className="App-header">
        <Campos tipo="shounen">
          Shounen
        </Campos>
        <Campos tipo="seinen">
          Seinen
        </Campos>
        <Campos tipo="shoujo">
          Shoujo
        </Campos>
        <Campos tipo="josei">
          Josei
        </Campos>
      </header>
    </div>
    </>
  );
}

export default App;
