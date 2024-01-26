import Header from "../../components/Header";
import Banner from "../../components/Banner";
import BannerBg from "../../assets/BannerBg-2.jpg";
import Collapsible from "../../components/Collapsible";
import Footer from "../../components/Footer";

import "../../style/About.css";

//Page A propos qui utilise plusieurs components pour afficher son contenu
function About() {
  return (
    <div>
      <Header />
      <Banner bannerBg={BannerBg} />
      <div className="about">
        <Collapsible label="Fiabilité">
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Collapsible>
        <Collapsible label="Respect">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapsible>
        <Collapsible label="Service">
          <p>
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        </Collapsible>
        <Collapsible label="Sécurité">
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </Collapsible>
      </div>
      <Footer />
    </div>
  );
}

export default About;
