const { Router } = require("express");
const {
  getCharacterById,
  getAllCharacters,
  getFav,
  postFavorite,
  deleteFavorite,
} = require("../handlers");

const router = Router();

router.get("/character/:id", getCharacterById);
router.get("/character", getAllCharacters);
router.get("/favorite", getFav);
router.post("/favorite", postFavorite);
router.delete("/favorite/:id", deleteFavorite);

module.exports = router;
