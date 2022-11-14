# Desafío post proyecto final

## Inicializar el proyecto

### En DBeaver:

- Copiar y pegar el contenido del archivo .sql de la carpeta Backend en el script del DBeaver y correrlo.

### Desde la terminal:

- Situarnos en la carpeta Backend y correr el siguiente comando:

```
npm i
```

- Y cuando esto termine:

```
node index
```

- Luego, nos situamos en poke-dx y corremos lo siguiente:

```
npm i
```

- Y cuando esto termine:

```
npm start
```

> Esto deberia abrir el proyecto en una pestaña del buscador por defecto. En este momento se deberia ver una tarjeta en blanco.

## Agregar un pokemon desde postman

### Setear el postman

- Como endpoint vamos a poner POST y seguido en el url ponemos localhost:9090/pokemones
- Ahora vamos a Body, cliqueamos donde dice "none" y elejimos "raw"
- Va a aparecer otro select que va a decir "Text", este lo ponemos en "JSON"
- Ahora copiamos lo siguiente en el espacio para el texto:

```json
{
  "name": "", //necesario
  "type1": "", //necesario
  "type2": "",
  "weight": 0, //necesario
  "height": 0, //necesario
  "move1": "", //necesario
  "move2": "",
  "description": "", //necesario
  "color": "", //necesario
  "secColor": "",
  "pic": "", //necesario, hay que poner el nombre de un pokemon existente en minusculas
  "hp": 0, //necesario
  "atk": 0, //necesario
  "def": 0, //necesario
  "satk": 0, //necesario
  "sdef": 0, //necesario
  "spd": 0 //necesario
}
```

- Completamos los datos y enviamos
- Luego de agregar el pokemon, deberia salir { "msg: Created" } con un status 201 en la Response
- Para que el pokemon aparezca la app, hay que recargar la pagina

## Importante

- Para que funcione, en Backend/Controllers/pokemones.js, tienen que estar los mismos datos que en tu DBeaver
