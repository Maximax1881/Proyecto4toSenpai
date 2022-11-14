/** @format */
import { Link } from "react-router-dom";
import "./minitarjetas.css";

const Minitarjetas = ({ texto, listaPokemones }) => {
  const string = texto;
  let regex = new RegExp(string, "gi");
  let filtred = listaPokemones.filter(function (pokemon) {
    return pokemon.Nombre.match(regex);
  });

  return (
    <div className="CuadriculaTarjetas">
      {filtred.map((pokemon, k) => (
        <Link
          key={k}
          style={{ textDecoration: "none" }}
          to={`/${pokemon.Nombre}`}>
          <div
            key={k}
            className="Imgminitarjetas"
            style={{
              backgroundColor: `${pokemon.Color}`,
              border: `solid 2px ${pokemon.Color}`,
            }}>
            <div>
              <button className="ButtonTarjetas">
                <p style={{ color: `${pokemon.Color}` }}>{pokemon.Numero}</p>
                <img
                  src={pokemon.Img}
                  alt={pokemon.Nombre}
                  className="ImgTarjetas"
                />
              </button>
            </div>
            <h2 className="H2Tarjetas">{pokemon.Nombre}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Minitarjetas;
