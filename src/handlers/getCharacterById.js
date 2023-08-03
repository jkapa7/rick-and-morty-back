const { getCharacterById } = require("../controllers");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const characterById = await getCharacterById(id);
  response(res, 200, characterById);
};
