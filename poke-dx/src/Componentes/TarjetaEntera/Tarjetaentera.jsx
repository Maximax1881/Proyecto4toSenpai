/** @format */

import { Link } from "react-router-dom";
import React from "react";
import { useParams } from "react-router-dom";
import "./TarjetaEntera.css";
import TipoPokemon from "../TipoPokemon/TipoPokemon";
import HabilidadPokemon from "../HabilidadPokemon/HabilidadPokemon";
import EstadisticaPokemon from "../EstadisticaPokemones/EstadisticaPokemones";
//import { useState } from "react";
const TarjetaEntera = ({ listaPokemones }) => {
  const params = useParams();

  let Pokemon = listaPokemones.filter(function (pokemon) {
    return pokemon.Nombre === params.PokemonNombre;
  })[0];
  return (
    <div
      className="TarjetaEnteraDiv"
      style={{
        backgroundColor: `${Pokemon.Color}`,
      }}>
      <div>
        <img className="ImgFondo" src="Images/Pokeball.png" />
        <header>
          <Link to="/Home">
            <h2 className="NombreTarjetaEntera">⬅ {Pokemon.Nombre}</h2>
            <h5 className="H5deTarjetaEntera">{Pokemon.Numero}</h5>
          </Link>
        </header>
      </div>

      <div className="NavTarjetaEntera">
        <div className="H4TarjertaEntera">
          <TipoPokemon color={Pokemon.Color} tipo={Pokemon.Tipo[0]} />
          <TipoPokemon color={Pokemon.ColorSecundario} tipo={Pokemon.Tipo[1]} />
        </div>
      </div>
      <div>
        <h4
          className="h4TarjetaEntera1"
          style={{
            color: `${Pokemon.Color}`,
          }}>
          About
        </h4>
      </div>

      <div className="Estadisticas">
        <div>
          <p>
            <img src="Images/Weight.svg" style={{ marginRight: "10px" }} />
            {Pokemon.Peso}
          </p>
          <br />
          <p className="Psecundario">Weight</p>
        </div>
        <div className="Lineagris1"></div>
        <div>
          <p>
            <img src="Images/Height.svg" style={{ marginRight: "10px" }} />
            {Pokemon.Altura}
          </p>
          <br />
          <p className="Psecundario">Height</p>
        </div>
        <div className="Lineagris1"></div>
        <div style={{ padding: "0", margin: "0" }}>
          <HabilidadPokemon habilidad={Pokemon.Habilidad[0]} />
          <HabilidadPokemon habilidad={Pokemon.Habilidad[1]} />
          <p className="Psecundario">Moves</p>
        </div>
      </div>
      <nav className="DescrpicionPokemon">
        <p>{Pokemon.Descrpicion}</p>
      </nav>
      <h4
        className="h4TarjetaEntera2"
        style={{
          color: `${Pokemon.Color}`,
        }}>
        Base Stats
      </h4>

      <div
        className="EstadisticasPokemon"
        style={{
          color: `${Pokemon.Color}`,
        }}>
        <EstadisticaPokemon
          EstadisticaPokemon={Pokemon.Estadisticas}
          ColorBarra={Pokemon.Color}
        />
      </div>
      <div className="Lineagris2"></div>
      <>
        <Link to>
          <img src={"Images/Frame.svg"} className="ImagenIzquierda" />
        </Link>

        <img
          src={`url(${Pokemon.Img})`}
          alt={Pokemon.Nombre}
          className="ImgTarjetaEntera"
        />
      </>
    </div>
  );
};

export default TarjetaEntera;
