const { catchedAsync } = require("../utils/index");

let fav = [];

const getFav = (req, res) => {
  res.status(200).end(JSON.stringify(fav));
};

module.exports = {
  getFav,
  deleteFavorite: catchedAsync(require("./deleteFavorite")),
  getAllCharacters: catchedAsync(require("./getAllCharacters")),
  getCharacterById: catchedAsync(require("./getCharacterById")),
  postFavorite: catchedAsync(require("./postFavorite")),
};
