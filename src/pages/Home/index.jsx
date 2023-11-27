import Banner from "../../components/Banner";
import Thumb from "../../components/Thumb";
import "../../style/AccueilBanner.css";
import "../../style/Gallery.css";
//import { Link } from "react-router-dom";

function App() {
  return (
    <div id="accueil">
      <Banner />
      <div className="acl-banner">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className="gallery">
        <Thumb />
        <Thumb />
        <Thumb />
      </div>
    </div>
  );
}

export default App;
