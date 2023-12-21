import Header from "../../components/Header";
//import Carrousel from "../../components/Carrousel";
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

  const logementData = data.find(
    (logement) => logement.id === jsonId.logementId
  );

  const tags = logementData?.tags.map((tags, index) => {
    return <Tag key={index} tags={tags} />;
  });

  console.log(logementData);

  return (
    <div>
      <Header />
      <div>
        <div className="lgm-title">
          <span>{logementData?.title}</span>
          <span>{logementData?.location}</span>
        </div>
        <div className="lgm-tag">{tags}</div>
      </div>
      <div>
        <div className="lgm-host">
          <span>host</span>
        </div>
        <div className="lgm-rating"></div>
      </div>
      <div className="lgm-content">
        <Collapsible label="Description">
          <p>{logementData?.description}</p>
        </Collapsible>
        <Collapsible label="Équipements">
          <p>equipments</p>
        </Collapsible>
      </div>
    </div>
  );
}

export default Logement;
//<>{logementData ? (      ) : <Navigate to="/*" />}</>
//<Carrousel slides={logementData?.pictures} />
