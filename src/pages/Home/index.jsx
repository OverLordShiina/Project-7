import Header from "../../components/Header";
import Thumb from "../../components/Thumb";
import Banner from "../../components/Banner";
import BannerBg from "../../assets/BannerBg-1.jpg";
import Footer from "../../components/Footer";

import "../../style/Accueil.css";

//Page d'accueil utilise les props du component Banner pour afficher l'image et son texte
function App() {
  return (
    <div id="accueil">
      <Header />
      <Banner bannerBg={BannerBg} text={"Chez vous,\npartout et ailleurs"} />
      <div className="gallery">
        <Thumb />
      </div>
      <Footer />
    </div>
  );
}

export default App;
