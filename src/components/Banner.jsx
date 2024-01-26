import "../style/Banner.css";
import { useLocation } from "react-router-dom";

//Fonction qui affiche le contenu de la bannière, prend une image et un text en props
function Banner({ bannerBg, text = "" }) {
  const location = useLocation();
  const pathName = location.pathname;
  const isAbout = "banner-pic about-banner";

  return (
    <div className={pathName === "/about" ? isAbout : "banner-pic"}>
      <img src={bannerBg} alt="banner background" />
      <h1 className="banner-text">{text}</h1>
    </div>
  );
}

export default Banner;
