/** @format */
import React from "react";
import "./EstadisticaPokemon.css";
import ProgressBar from "@ramonak/react-progress-bar";

const EstadisticaPokemon = ({ EstadisticaPokemon, ColorBarra}) => {
  const estadistica = EstadisticaPokemon;

  return (
    <div>
      {estadistica.map((est) => {
        console.log(estadistica);
        return (
          <div className='PokemonValor'>
            <h5>{est.Elemento}</h5>
            <h5 style={{ color: "black" }}>{est.Valor}</h5>
            <ProgressBar className="barraHabilidad"
              completed={est.Valor}
              bgColor={ColorBarra}
              maxCompleted={250}
              labelSize="0px"
              width="250px"
              height="5px"
            />
          </div>
        );
      })}
    </div>
  );
};

export default EstadisticaPokemon;
