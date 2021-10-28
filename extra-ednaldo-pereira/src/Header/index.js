import './style.css';

const Header = ({empresa}) => {

  return(
    <header>
      <h1>{empresa}</h1>
      <nav>
        <ul>
          <li><a href="#">Edinaldo</a></li>
          <li><a href="#videos">Videos</a></li>
          <li><a href="#footer">Footer</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;