import React from "react";


const TipoPokemon = ({color, tipo}) => {
    if (tipo === undefined ){
        console.log(tipo)
        return null

    }
    
    return (       
        <h3
          style={{
            backgroundColor: `${color}`,
            border: `solid 7px ${color}`,
          }}>
          {tipo}
        </h3>
     );
}
 
export default TipoPokemon;