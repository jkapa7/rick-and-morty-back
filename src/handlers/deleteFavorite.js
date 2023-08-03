const { deleteFavorite } = require("../controllers");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const detail = await deleteFavorite();
  response(res, 200, detail);
};
