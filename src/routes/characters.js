const express = require("express");

const {
  getCharacterById,
  getAllCharacters,
  getDetail,
  getFav,
  postFavorite,
  deleteFavorite,
} = require("../controllers");

const router = express.Router();

router.get("/character/:id", getCharacterById);
router.get("/all", getAllCharacters);
router.get("/detail/:detailId", getDetail);
router.get("/fav", getFav);
router.post("/fav", postFavorite);
router.delete("/fav/:id", deleteFavorite);

module.exports = router;
