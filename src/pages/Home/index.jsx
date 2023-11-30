import Banner from "../../components/Banner";
import Thumb from "../../components/Thumb";
import BannerBg from "../../assets/IMG.svg";
import "../../style/AccueilBanner.css";
import "../../style/Gallery.css";
//import { Link } from "react-router-dom";

function App() {
  return (
    <div id="accueil">
      <Banner />
      <div className="acl-banner">
        <img src={BannerBg} alt="banner background" />
        <span className="banner-text">Chez vous, partout et ailleurs</span>
      </div>
      <div className="gallery">
        <Thumb />
      </div>
    </div>
  );
}

export default App;
