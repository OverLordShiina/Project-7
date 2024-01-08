import Header from "../../components/Header";
import Thumb from "../../components/Thumb";
import Banner from "../../components/Banner";
import BannerBg from "../../assets/BannerBg-1.jpg";
import Footer from "../../components/Footer";

import "../../style/Gallery.css";

function App() {
  return (
    <div id="accueil">
      <Header />
      <Banner bannerBg={BannerBg} text="Chez vous, partout et ailleurs" />
      <div className="gallery">
        <Thumb />
      </div>
      <Footer />
    </div>
  );
}

export default App;
