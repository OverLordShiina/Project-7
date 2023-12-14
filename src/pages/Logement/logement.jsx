import Header from "../../components/Header";
import Collapsible from "../../components/Collapsible";
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

  const logementData = data.find(
    (logement) => logement.id === jsonId.logementId
  );
  console.log(logementData);
  return (
    <div>
      <Header />
      <div className="carrousel"></div>
      <div className="title"></div>
      <div className="tag"></div>
      <div className="host"></div>
      <div className="rating"></div>
      <div className="lgm-content">
        <Collapsible label="Description">
          <p>description</p>
        </Collapsible>
        <Collapsible label="Équipements">
          <p>equipments</p>
        </Collapsible>
      </div>
    </div>
  );
}

export default Logement;
