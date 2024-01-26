import React from "react";
import "../style/Tag.css";

//Utilise le props tags pour gérée l'affichage des tags
function Tag({ tags }) {
  return <span className="lgm-tags">{tags}</span>;
}

export default Tag;
