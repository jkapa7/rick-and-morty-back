const axios = require("axios");

module.exports = async (id) => {
  const result = await axios(`https://rickandmortyapi.com/api/character/${id}`);
  const characterDetail = result.data;

  const character = {
    id: characterDetail.id,
    image: characterDetail.image,
    name: characterDetail.name,
    gender: characterDetail.gender,
    species: characterDetail.species,
    status: characterDetail.status,
    origin: characterDetail.origin,
  };

  return character;
};
