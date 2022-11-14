import React from "react";


const HabilidadPokemon = ({habilidad}) => {
    if (habilidad === undefined ){
        console.log(habilidad)
        return <br />

    }
    
    return (       
       <p >
          {habilidad}
          <br />
       </p>
     );
}
 
export default HabilidadPokemon;