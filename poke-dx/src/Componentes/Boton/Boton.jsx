/** @format */
import { useState } from "react";
import "../../Home/Home.css";



const Boton = ({ listaPokemones, setListaPokemones, pokemonInfo }) => {
  const [bandera, setBandera] = useState(true);
  const [buttonText, setButtonText] = useState("az🡳");
  const manejarBoton = () => {
    if (bandera) {
      const sorted1 = [...listaPokemones].sort(
        (a, b) => Number(a.Numero.slice(1)) - Number(b.Numero.slice(1))
      );
      setListaPokemones(sorted1);
      setBandera(!bandera);
      setButtonText('#🡳');
    } else {
      setListaPokemones(pokemonInfo);
      setBandera(!bandera);
      setButtonText('az🡳');
     
    }
  };

  return (
    
    <button className='btn-arrow-filter'  onClick={manejarBoton}  >
    {buttonText}
    </button>  


  );
};

export default Boton;
