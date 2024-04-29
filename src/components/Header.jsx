import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="section">
      <h2>Header</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home </Link>
            <Link to="/persons">Persons </Link>
            <Link to="/about">About </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
