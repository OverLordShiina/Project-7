import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import "../style/Header.css";
//ajouter un marqueur sous la page actuelle ex:accueil doit être souligner sur la page d'accueil

function Header() {
  return (
    <div className="ksa-header">
      <img src={Logo} alt="Kasa Logo" />
      <div className="nav-menu">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          A Propos
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
