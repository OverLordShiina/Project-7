import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import "../style/Banner.css";

function Banner() {
  return (
    <div className="ksa-banner">
      <img src={Logo} alt="Kasa Logo" />
      <div className="nav-menu">
        <Link to="/">Accueil</Link>
        <Link to="*">A Propos</Link>
      </div>
    </div>
  );
}

export default Banner;
