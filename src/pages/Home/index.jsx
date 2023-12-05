import Header from "../../components/Header";
import Thumb from "../../components/Thumb";
import Banner from "../../components/Banner";
import "../../style/Gallery.css";
//import { Link } from "react-router-dom";

function App() {
  return (
    <div id="accueil">
      <Header />
      <Banner />
      <div className="gallery">
        <Thumb />
      </div>
    </div>
  );
}

export default App;
