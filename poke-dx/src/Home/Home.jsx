/** @format */
import React from "react";
import { useState } from "react";
import Boton from "../Componentes/Boton/Boton";
import Minitarjetas from "../Componentes/Minitarjetas/Minitarjetas";
import { PokemonInfo } from "../tarjetasInfo/PokemonInfo";
import "./Home.css";
export function Home({ listaPokemones, setListaPokemones }) {
  const [texto, setTexto] = useState("");
  const manejarInput = (e) => {
    setTexto(e.target.value);
  };

  return (
    <div>
      <header>
        <div className="PascalHeader">
          <img
            className="Headerimg"
            src={"Images/Pokeball.png"}
            alt="Pokeballron"
          />
          <h1>Pokédex</h1>
        </div>

        <Boton
          listaPokemones={listaPokemones}
          setListaPokemones={setListaPokemones}
          pokemonInfo={listaPokemones}
        />
      </header>

      <nav>
        <div className="PascalSearch">
          <input
            autoFocus
            className="Imputheader"
            type="text"
            placeholder="🔍︎ Search..."
            onChange={manejarInput}
          />
        </div>
      </nav>
      <div>
        <Minitarjetas texto={texto} listaPokemones={listaPokemones} />
      </div>
    </div>
  );
}
