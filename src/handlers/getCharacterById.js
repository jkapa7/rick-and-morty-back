const { getCharacterById } = require("../controllers");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const characterById = await getCharacterById();
  response(res, 200, characterById);
};
