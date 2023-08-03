require("dotenv").config();
const { Sequelize } = require("sequelize");
const characterModel = require("./models/Character");
const favoritesModel = require("./models/Favorites");

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const URL = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`;

const sequelize = new Sequelize(URL, {
  logging: false,
  native: false,
});

characterModel(sequelize);
favoritesModel(sequelize);

module.exports = {
  ...sequelize.models,
  sequelize,
};
