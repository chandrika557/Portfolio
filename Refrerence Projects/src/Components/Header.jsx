import { Link } from "react-router-dom";
import "../Styles/Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="logo">MyApp</div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/classapp">Class App</Link>
      </nav>
    </header>
  );
}

export default Header;