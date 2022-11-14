const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "Cuchilla2020-",
    database: "pokemons",
  },
  searchPath: ["knex", "public"],
});

exports.allPokemones = function (req, res, next) {
  knex
    .select("*")
    .from("pokemones")
    .orderBy("id")
    .then((r) => {
      if (r.length < 1) {
        res
          .status(500)
          .json({ msg: "Hubo un problema con la base de datos!" });
      }
      res.status(200).json(r);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ msg: "Hubo un problema con la base de datos", err });
    })
    .finally(() => {
      next();
    });
};

exports.addPokemon = function (req, res, next) {
  const newPkm = req.body;

  if (
    !newPkm.name ||
    !newPkm.type1 ||
    !newPkm.weight ||
    !newPkm.height ||
    !newPkm.move1 ||
    !newPkm.description ||
    !newPkm.pic
  ) {
      res.status(400).json({ msg: "Bad Request" });
  } else {
    knex("pokemones")
      .insert({
        name: newPkm.name,
        type1: newPkm.type1,
        type2: newPkm.type2,
        weight: newPkm.weight,
        height: newPkm.height,
        move1: newPkm.move1,
        move2: newPkm.move2,
        description: newPkm.description,
        color: newPkm.color,
        seccolor: newPkm.secColor,
        pic: `https://img.pokemondb.net/sprites/black-white/normal/${newPkm.pic}.png`,
        hp: newPkm.hp,
        atk: newPkm.atk,
        def: newPkm.def,
        satk: newPkm.satk,
        sdef: newPkm.sdef,
        spd: newPkm.spd,
      })
      .then((r) => {
        res.status(201).json({ msg: "Created" });
      })
      .catch((err) => {
        res.status(500).json(err);
      })
      .finally(() => {
        next();
      });
  }
};
