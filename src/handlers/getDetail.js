const { getDetail } = require("../controllers");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { detailId } = req.params;
  const detail = await getDetail();
  response(res, 200, detail);
};
