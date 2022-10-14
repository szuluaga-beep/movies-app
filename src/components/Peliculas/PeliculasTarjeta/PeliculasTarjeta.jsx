import React from "react";
import './Peliculastarjeta.css'
const PeliculasTarjeta = ({id,url,name}) => {
  return (
    <div className="tarjeta" key={id}>
      <img src={url} />
      <h2>{name}</h2>
      <p>Esta pelicula es buena</p>
    </div>
  );
};

export default PeliculasTarjeta;
