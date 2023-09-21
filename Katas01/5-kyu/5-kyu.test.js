const {
  getHighestPokemonName,
  getHighestPokemonNamePromiseAll,
  getHighestPokemonNameWithValidations,
  getHighestPokemonNamesByTypeAndHeight,
  getHighestPokemonNamePromiseAllThen,
  getHighestPokemonNamePromiseAllArray,
  countPersonsWithAgeHighest
} = require('./5-kyu');

/**
 * Funcion que devuelve el nombre del pokemon más alto dados dos ids de pokemon
 *
 * url: https://pokeapi.co/api/v2/pokemon/<id>
 */
it('getHighestPokemonName', async () => {
  const pokemonName = await getHighestPokemonName(25, 13);
  expect(pokemonName).toEqual('pikachu');
});

/**
 * Funcion que devuelve el nombre del pokemon más alto dados dos ids de pokemon
 * 
 * Se debe usar carga en paralelo
 *
 * url: https://pokeapi.co/api/v2/pokemon/<id>
 */
it('getHighestPokemonNamePromiseAll', async () => {
  const pokemonName = await getHighestPokemonNamePromiseAll(25, 13);
  expect(pokemonName).toEqual('pikachu');
});

/**
 * Funcion que devuelve el nombre del pokemon más alto dados dos ids de pokemon
 * 
 * Se debe usar carga en paralelo. Usando then
 *
 * url: https://pokeapi.co/api/v2/pokemon/<id>
 */
it('getHighestPokemonNamePromiseAllThen', async () => {
  const pokemonName = await getHighestPokemonNamePromiseAllThen(25, 13);
  expect(pokemonName).toEqual('pikachu');
});

/**
 * Funcion que el nombre del pokemon más alto dados dos ids de pokemon
 * 
 * Si para alguno de los ids dados no es un pokemon válido, se devuelve null
 *
 * url: https://pokeapi.co/api/v2/pokemon/<id>
 */
it('getHighestPokemonNameWithValidations', async () => {
  const pokemonName = await getHighestPokemonNameWithValidations(25, 13123123);
  expect(pokemonName).toEqual(null);
});

/**
 * Funcion que devuelve el nombre del pokemon más alto dados un array de pokemons
 * 
 * Se debe usar carga en paralelo. Usando then
 *
 * url: https://pokeapi.co/api/v2/pokemon/<id>
 */
it('getHighestPokemonNamePromiseAllArray', async () => {
  let pokemonName = await getHighestPokemonNamePromiseAllArray([25, 13]);
  expect(pokemonName).toEqual('pikachu');
  pokemonName = await getHighestPokemonNamePromiseAllArray([25, 13, 26, 34, 99]);
  expect(pokemonName).toEqual('nidoking');
});

/**
 * Funcion que, dado un tipo de pokemon, devuelve los nombres de todos los pokemon
 * de ese tipo que tengan la altura mayor o igual a la dada por parámetro
 * 
 *
 * url: https://pokeapi.co/api/v2/pokemon/<id>
 * url: https://pokeapi.co/api/v2/type/<id_type>
 */
it('getHighestPokemonNamesByTypeAndHeight', async () => {
  const pokemonNames = await getHighestPokemonNamesByTypeAndHeight('electric', 4);
  expect(pokemonNames).toEqual(["pikachu",  "raichu",  "magneton",  "voltorb",  "electrode",  "electabuzz",  "jolteon",  "zapdos",  "chinchou",  "lanturn",  "mareep",  "flaaffy",  "ampharos",  "elekid",  "raikou",  "electrike",  "manectric",  "plusle",  "minun",  "shinx",  "luxio",  "luxray",  "pachirisu",  "magnezone",  "electivire",  "blitzle",  "zebstrika",  "emolga",  "galvantula",  "eelektrik",  "eelektross",  "stunfisk",  "thundurus-incarnate",  "zekrom",  "helioptile",  "heliolisk",  "charjabug",  "vikavolt",  "tapu-koko",  "xurkitree",  "zeraora",  "boltund",  "toxel",  "toxtricity-amped",  "dracozolt",  "arctozolt",  "regieleki",  "pawmo",  "pawmot",  "bellibolt",  "wattrel",  "kilowattrel",  "sandy-shocks",  "iron-hands",  "iron-thorns",  "miraidon",  "thundurus-therian",  "ampharos-mega",  "manectric-mega",  "pikachu-rock-star",  "pikachu-belle",  "pikachu-pop-star",  "pikachu-phd",  "pikachu-libre",  "pikachu-cosplay",  "pikachu-original-cap",  "pikachu-hoenn-cap",  "pikachu-sinnoh-cap",  "pikachu-unova-cap",  "pikachu-kalos-cap",  "pikachu-alola-cap",  "raichu-alola",  "geodude-alola",  "graveler-alola",  "golem-alola",  "vikavolt-totem",  "oricorio-pom-pom",  "pikachu-partner-cap",  "togedemaru-totem",  "pikachu-starter",  "pikachu-world-cap",  "toxtricity-low-key",  "pikachu-gmax",  "toxtricity-amped-gmax",  "toxtricity-low-key-gmax",  "voltorb-hisui",  "electrode-hisui",  "miraidon-low-power-mode",  "miraidon-drive-mode",  "miraidon-aquatic-mode",  "miraidon-glide-mode"]);
});

/**
 * Funcion que, dado un arbol de objetos personas. Devuelve el número de personas
 * que tienen más edad de la indicada
 * 
 * person = {
 *  name: 'pepe',
 *  age: 57,
 *  child: [{
 *    name: 'susana',
 *    age: 12,
 *    child: []
 *   },
 *   {
 *    name: 'julia',
 *    age: 20,
 *    child: [
 *    {
 *     name: 'jose',
 *     age: 1,
 *     child: []
 *    },
 *   ]
 *   },
 *  ]
 * }
 */
it('countPersonsWithAgeHighest', () => {
  const family = [{
    name: 'pepe',
    age: 57,
    child: [{
      name: 'susana',
      age: 12,
      child: []
     },
     {
      name: 'julia',
      age: 20,
      child: [
        {
        name: 'jose',
        age: 1,
        child: []
        },
      ]
     }]
    }];
  let count = countPersonsWithAgeHighest(family, 19);
  expect(count).toBe(2);
  count = countPersonsWithAgeHighest(family, 10);
  expect(count).toBe(3);
});
