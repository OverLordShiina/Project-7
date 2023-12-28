import Header from "../../components/Header";
import ErrorPage from "../../components/ErrorPage";
import Carrousel from "../../components/Carrousel";
import Collapsible from "../../components/Collapsible";
import Tag from "../../components/Tag";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../style/Logement.css";

function Logement() {
  const jsonId = useParams();
  const url = "http://localhost:3000/logements.json";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  let logementData;
  if (data) {
    logementData = data.find((logement) => logement.id === jsonId.logementId);
  }

  const slides = logementData?.pictures;
  const tags = logementData?.tags.map((tags, index) => {
    return <Tag key={index} tags={tags} />;
  });

  const equipments = logementData?.equipments.map((equipments, index) => {
    return <li key={index}>{equipments}</li>;
  });

  if (!logementData) {
    return <ErrorPage />;
  } else {
    return (
      <div>
        <Header />
        <Carrousel slides={slides} />
        <div className="lgm-info">
          <div className="lgm-title">
            <span>{logementData?.title}</span>
            <span>{logementData?.location}</span>
          </div>
          <div className="lgm-tag">{tags}</div>
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
            <p>{equipments}</p>
          </Collapsible>
        </div>
      </div>
    );
  }
}

export default Logement;
