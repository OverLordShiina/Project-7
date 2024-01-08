import Header from "../../components/Header";
import Carrousel from "../../components/Carrousel";
import Collapsible from "../../components/Collapsible";
import Tag from "../../components/Tag";
import Footer from "../../components/Footer";
import { Navigate, useParams } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch";

import "../../style/Logement.css";
import Rating from "../../components/Rating";

function Logement() {
  const jsonId = useParams();
  const url = "http://localhost:3000/logements.json";
  const { data, isPending, error } = useFetch(url);

  let logementData;
  if (data) {
    logementData = data.find((logement) => logement.id === jsonId.logementId);
  }
  if (isPending) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    console.log(error);
  }

  if (!logementData) {
    return <Navigate to="/*" />;
  } else {
    const [firstName, lastName] = logementData.host.name.split(" ");
    return (
      <div>
        <Header />
        <Carrousel slides={logementData.pictures} />
        <div className="lgm-content">
          <div className="lgm-info">
            <div className="lgm-title">
              <span>{logementData.title}</span>
              <span>{logementData.location}</span>
            </div>
            <div className="lgm-tag">
              {logementData.tags.map((tags, index) => {
                return <Tag key={index} tags={tags} />;
              })}
            </div>
          </div>
          <div className="lgm-hostInfo">
            <div className="lgm-host">
              <span>
                {firstName}
                <br />
                {lastName}
              </span>
              <img src={logementData.host.picture} alt="host" />
            </div>
            <div className="lgm-rating">
              <Rating rating={logementData.rating} />
            </div>
          </div>
        </div>
        <div className="lgm-details">
          <Collapsible label="Description">
            <p>{logementData.description}</p>
          </Collapsible>
          <Collapsible label="Équipements">
            <p>
              {logementData.equipments.map((equipments, index) => {
                return <li key={index}>{equipments}</li>;
              })}
            </p>
          </Collapsible>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Logement;
