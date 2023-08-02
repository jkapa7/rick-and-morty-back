const axios = require("axios");
const { favorite, character } = require("../DB_connection");

let fav = [];

const getFav = (req, res) => {
  res.status(200).end(JSON.stringify(fav));
};

const getDetailId = async (req, res) => {
  const { detailId } = req.params;
  try {
    const result = await axios(
      `https://rickandmortyapi.com/api/character/${detailId}`
    );
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
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json("Not found", error);
  }
};

const getApiData = async (req, res) => {
  try {
    const result = await axios(`https://rickandmortyapi.com/api/character/`);

    const character = {
      id: result.id,
      name: result.name,
      species: result.species,
      status: result.status,
      origin: result.origin,
      gender: result.gender,
      image: result.image,
    };
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json("Not found", error);
  }
};

module.exports = {
  getAllChars,
  getApiData,
  getCharacterId,
  getDetailId,
  postFav,
  getFav,
  deleteFav,
};
