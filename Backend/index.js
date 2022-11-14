const express = require("express");
const app = express();
const cors = require("cors");
const pokemones = require("./Controllers/pokemones");

app.use(express.json());
app.use(cors());

app.get("/pokemones", pokemones.allPokemones);


app.post("/pokemones", pokemones.addPokemon);

app.listen(9090, () => {
  console.log("Corriendo 9090");
});
