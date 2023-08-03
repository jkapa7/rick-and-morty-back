const { getDetail } = require("../controllers");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const detail = await getDetail(id);
  response(res, 200, detail);
};
