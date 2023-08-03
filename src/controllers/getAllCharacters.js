const axios = require("axios");

module.exports = async () => {
  const result = await axios.get(`https://rickandmortyapi.com/api/character/`);

  const characters = result.data.results.map((e) => {
    return {
      id: e.id,
      name: e.name,
      species: e.species,
      status: e.status,
      origin: e.origin,
      gender: e.gender,
      image: e.image,
    };
  });

  return characters;
};
