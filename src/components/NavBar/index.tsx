import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <header className="header-container">
      <nav className="navbar navbar-expand-md navbar-light static-top">
        <div className="container nav-container__header">
          <Link to={'/'}>
            <h2>Carros Top</h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse block-nav__menu"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto nav-list">
              <li className="nav-item">
                <NavLink to={'/'}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Catalog">Catalogo</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
