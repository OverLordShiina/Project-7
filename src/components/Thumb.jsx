import React, { useState, useEffect } from "react";
import "../style/Thumb.css";

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
      <img src={logement.cover} alt="Thumbnail Logement" />
      <p>{logement.title}</p>
    </li>
  ));
  return <ul className="list-thumb">{listItems}</ul>;
}

export default Thumb;
