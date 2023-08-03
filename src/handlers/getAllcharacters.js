const { getAllCharacters } = require("../controllers");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const allCharacters = await getAllCharacters();
  response(res, 200, allCharacters);
};
