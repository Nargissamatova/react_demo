function Header() {
  return (
    <header className="section">
      <h2>Header</h2>
      <nav>
        <ul>
          <li>
            <Link>Landing page</Link>
            <Link>Persons</Link>
            <Link>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
