import Header from "../../components/Header";
import Thumb from "../../components/Thumb";
import Banner from "../../components/Banner";
import BannerBg from "../../assets/BannerBg-1.svg";
import "../../style/Gallery.css";
//import { Link } from "react-router-dom";

function App() {
  return (
    <div id="accueil">
      <Header />
      <Banner bannerBg={BannerBg} text="Chez vous, partout et ailleurs" />
      <div className="gallery">
        <Thumb />
      </div>
    </div>
  );
}

export default App;
