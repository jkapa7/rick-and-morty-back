const axios = require("axios");

module.exports = async (id) => {
  const result = await axios(`https://rickandmortyapi.com/api/character/${id}`);

  const character = {
    id: result.data.id,
    image: result.data.image,
    name: result.data.name,
    gender: result.data.gender,
    species: result.data.species,
  };

  return character;
};
