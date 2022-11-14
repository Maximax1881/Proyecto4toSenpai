/** @format */

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import TarjetaEntera from "./Componentes/TarjetaEntera/Tarjetaentera";
// import PokemonInfo from "./tarjetasInfo/PokemonInfo";
import { useEffect, useState } from "react";

function App() {
  const [pokemonInfo, setPokemonInfo] = useState([
    {
      Nombre: "",
      Tipo: [""],
      Numero: "",
      Habilidad: [""],
      Peso: "",
      Altura: "",
      id: 0,
      Img: "",
      Color: "#b7b9d0",
      ColorSecundario: "#b69e31",
      Descrpicion: "",
      Estadisticas: [
        {
          Elemento: "HP",
          Valor: "",
        },
        {
          Elemento: "ATK",
          Valor: "",
        },
        {
          Elemento: "DET",
          Valor: "",
        },
        {
          Elemento: "SATK",
          Valor: "",
        },
        {
          Elemento: "SDEF",
          Valor: "",
        },
        {
          Elemento: "SPD",
          Valor: "",
        },
      ],
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:9090/pokemones", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((resJSON) => {
        for (let i = 0; i < resJSON.length; i++) {
          if (i === 0) {
            setPokemonInfo([
              {
                Nombre: resJSON[i].name,
                Tipo: [
                  resJSON[i].type1,
                  resJSON[i].type2 ? resJSON[i].type2 : null,
                ],
                Numero: resJSON[i].id,
                Habilidad: [
                  resJSON[i].move1,
                  resJSON[i].move2 ? resJSON[i].move2 : null,
                ],
                Peso: resJSON[i].weight,
                Altura: resJSON[i].height,
                id: resJSON[i].id,
                Img: resJSON[i].pic,
                Color: resJSON[i].color,
                ColorSecundario: resJSON[i].seccolor,
                Descrpicion: resJSON[i].description,
                Estadisticas: [
                  {
                    Elemento: "HP",
                    Valor: resJSON[i].hp,
                  },
                  {
                    Elemento: "ATK",
                    Valor: resJSON[i].atk,
                  },
                  {
                    Elemento: "DET",
                    Valor: resJSON[i].def,
                  },
                  {
                    Elemento: "SATK",
                    Valor: resJSON[i].satk,
                  },
                  {
                    Elemento: "SDEF",
                    Valor: resJSON[i].sdef,
                  },
                  {
                    Elemento: "SPD",
                    Valor: resJSON[i].spd,
                  },
                ],
              },
            ]);
          } else {
            setPokemonInfo((p) => {
              p.push({
                Nombre: resJSON[i].name,
                Tipo: [
                  resJSON[i].type1,
                  resJSON[i].type2 ? resJSON[i].type2 : null,
                ],
                Numero: resJSON[i].id,
                Habilidad: [
                  resJSON[i].move1,
                  resJSON[i].move2 ? resJSON[i].move2 : null,
                ],
                Peso: resJSON[i].weight,
                Altura: resJSON[i].height,
                id: resJSON[i].id,
                Img: resJSON[i].pic,
                Color: resJSON[i].color,
                ColorSecundario: resJSON[i].seccolor,
                Descrpicion: resJSON[i].description,
                Estadisticas: [
                  {
                    Elemento: "HP",
                    Valor: resJSON[i].hp,
                  },
                  {
                    Elemento: "ATK",
                    Valor: resJSON[i].atk,
                  },
                  {
                    Elemento: "DET",
                    Valor: resJSON[i].def,
                  },
                  {
                    Elemento: "SATK",
                    Valor: resJSON[i].satk,
                  },
                  {
                    Elemento: "SDEF",
                    Valor: resJSON[i].sdef,
                  },
                  {
                    Elemento: "SPD",
                    Valor: resJSON[i].spd,
                  },
                ],
              });
              return p;
            });
          }
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home listaPokemones={pokemonInfo}
                setListaPokemones={setPokemonInfo} />}>
            {" "}
          </Route>
          <Route
            path="/:PokemonNombre"
            element={<TarjetaEntera listaPokemones={pokemonInfo} />}>
            {" "}
          </Route>
          <Route
            path="Home"
            element={
              <Home
                listaPokemones={pokemonInfo}
                setListaPokemones={setPokemonInfo}
              />
            }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
