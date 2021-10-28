import logo from './logo.svg';
import Greeting from './componentes/Greeding/'
import './App.css';

function App() {
  
const caos = {
    firstName: 'Turma',
    lastName: '01'
  }
 
  return (
    <div className="App">
      <header className="App-header">
        <Greeting user={caos} />
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Greeting user={caos} />
        </a>
      </header>
    </div>
  );
}

export default App;
