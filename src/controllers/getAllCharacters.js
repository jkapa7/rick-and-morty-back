const axios = require("axios");

module.exports = async () => {
  const result = await axios.get(`https://rickandmortyapi.com/api/character/`);

  const characters = result.data.results.map((e) => {
    return 1;
  });

  console.log(characters);
  // const character = {
  //   id: result.data.results.id,
  //   name: result.data.results.name,
  //   species: result.data.results.species,
  //   status: result.data.results.status,
  //   origin: result.data.results.origin,
  //   gender: result.data.results.gender,
  //   image: result.data.results.image,
  // };

  return characters;
};
