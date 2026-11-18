import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <nav className="navbar__container" aria-label="Navegación principal">
        <NavLink to="/" className="navbar__brand" onClick={closeMenu}>BA.</NavLink>
        <button className="navbar__toggle" type="button" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} aria-controls="navbar-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="navbar__toggle-line"></span>
          <span className="navbar__toggle-line"></span>
          <span className="navbar__toggle-line"></span>
        </button>
        <ul id="navbar-menu" className={`navbar__list ${menuOpen ? "navbar__list--open" : ""}`}>
          <li><NavLink to="/" end className={({ isActive }) => `navbar__link ${isActive ? "navbar__link--active" : ""}`} onClick={closeMenu}>Inicio</NavLink></li>
          <li><NavLink to="/sobre-mi" className={({ isActive }) => `navbar__link ${isActive ? "navbar__link--active" : ""}`} onClick={closeMenu}>Sobre mí</NavLink></li>
          <li><NavLink to="/proyectos" className={({ isActive }) => `navbar__link ${isActive ? "navbar__link--active" : ""}`} onClick={closeMenu}>Proyectos</NavLink></li>
          <li><NavLink to="/contacto" className={({ isActive }) => `navbar__link ${isActive ? "navbar__link--active" : ""}`} onClick={closeMenu}>Contacto</NavLink></li>
          <li><button className="navbar__theme-button" type="button" onClick={toggleTheme} aria-label={`Activar tema ${theme === "light" ? "oscuro" : "claro"}`}>{theme === "light" ? "☾" : "☀"}</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
