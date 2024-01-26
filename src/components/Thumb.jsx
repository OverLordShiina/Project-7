import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/Thumb.css";

//Utilise la data fetched depuis l'URL pour générer les informations dans des vignettes ainsi que la redirection vers la page logement de l'appartement
function Thumb() {
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

  const listItems = data.map((logement) => (
    <li key={logement.id} className="thumb">
      <Link to={`/logement/${logement.id}`}>
        <img src={logement.cover} alt="Thumbnail Logement" />
        <div></div>
        <p>{logement.title}</p>
      </Link>
    </li>
  ));
  return <ul className="list-thumb">{listItems}</ul>;
}

export default Thumb;
