import React from "react";
import './Peliculastarjeta.css'

const PeliculasTarjeta = (props) => {
  return (
    <div className="tarjeta" key={props.id}>
      <img src={props.url} />
      <h2>{props.name}</h2>
      <p>Esta pelicula es buena</p>
    </div>
  );
};

export default PeliculasTarjeta;
