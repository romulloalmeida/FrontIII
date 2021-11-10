/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.scss';

const Header = ({empresa},{temaEscuro}) => {

  return(
    <header>
      <h1 className='stick-top'>{empresa}</h1>
      <div className="container-fluid">
      <a className="navbar-brand" href="#">{empresa}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample04">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Ednaldo</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Videos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Footer</a>
          </li>
          </ul>
      </div>
    </div>
    </header>
  );
}

export default Header;