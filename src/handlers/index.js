let fav = [];

const getFav = (req, res) => {
  res.status(200).end(JSON.stringify(fav));
};

module.exports = {
  getFav,
  deleteFavorite: require("./deleteFavorite"),
  getAllCharacters: require("./getAllCharacters"),
  getCharacterById: require("./getCharacterById"),
  getDetail: require("./getDetail"),
  postFavorite: require("./postFavorite"),
};
