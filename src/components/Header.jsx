import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import "../style/Header.css";

function Header() {
  return (
    <div className="ksa-header">
      <img src={Logo} alt="Kasa Logo" />
      <div className="nav-menu">
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </div>
    </div>
  );
}

export default Header;
