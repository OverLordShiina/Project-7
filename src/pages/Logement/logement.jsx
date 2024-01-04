import Header from "../../components/Header";
import Carrousel from "../../components/Carrousel";
import Collapsible from "../../components/Collapsible";
import Tag from "../../components/Tag";
import { Navigate, useParams } from "react-router-dom";
import "../../style/Logement.css";
import { useFetch } from "../../Hooks/useFetch";

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
    return (
      <div>
        <Header />
        <Carrousel slides={logementData.pictures} />
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
        <div className="lgm-profile">
          <div className="lgm-host">
            <span>host</span>
          </div>
          <div className="lgm-rating"></div>
        </div>
        <div className="lgm-content">
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
      </div>
    );
  }
}

export default Logement;
