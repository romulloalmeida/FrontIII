/* eslint-disable jsx-a11y/anchor-is-valid */
import Campo from './componentes/Campos';
import './App.css';

function App() {

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
          <div className="container-fluid">
            <a className="navbar-brand" href="#anime">Animes</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample03">
              <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#idshounen">Shounen</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#idseinen">Seinen</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#idshoujo">Shoujo</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#idjosei">Josei</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false">Genero</a>
                  <ul className="dropdown-menu" aria-labelledby="dropdown03">
                    <li><a className="dropdown-item" href="#">Comédia</a></li>
                    <li><a className="dropdown-item" href="#">Drama</a></li>
                    <li><a className="dropdown-item" href="#">Romance</a></li>
                    <li><a className="dropdown-item" href="#">Escolar</a></li>
                    <li><a className="dropdown-item" href="#">Slice of Life</a></li>
                    <li><a className="dropdown-item" href="#">Esporte</a></li>
                    <li><a className="dropdown-item" href="#">Horror</a></li>
                    <li><a className="dropdown-item" href="#">Isekai</a></li>
                    <li><a className="dropdown-item" href="#">Jogo</a></li>
                    <li><a className="dropdown-item" href="#">Fantasia</a></li>
                  </ul>
                </li>
              </ul>
              <form>
                <input className="form-control" type="text" placeholder="Search" aria-label="Search" disabled></input>
              </form>
            </div>
          </div>
        </nav>

        <h1>Animes</h1>
        <Campo tipo="Shounen" />
        <Campo tipo="Seinen" />
        <Campo tipo="Shoujo" />
        <Campo tipo="Josei" />

      </header>
    </>
  );
}

export default App;
