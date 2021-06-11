const request = require("request");

request.get('https://pokeapi.co/api/v2/pokemon/ditto', (err, res, body) => {
    console.log(res.statusCode);
    const pokemon = JSON.parse(body);
    console.log(pokemon);
    console.log(`Mi pokemon es ${pokemon.name}`);
});
