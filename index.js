const express = require('express');
const app = express();
const { Sequelize } = require("sequelize");

// Express Routes Import
const AuteurRoutes = require("./routes/auteur");
const LivreRoutes = require("./routes/livre");

// Sequelize model imports
const AuteurModel = require("./modeles/AuteurModel");
const LivreModel = require("./modeles/LivreModel");

app.use(express.json());

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./storage/data.db", // Path to the file that will store the SQLite DB.
});

// Initialising the Model on sequelize
AuteurModel.initialise(sequelize);
LivreModel.initialise(sequelize);

const { models } = sequelize;
models.livre.belongsTo(models.auteur);
models.auteur.hasMany(models.livre);

// Syncing the models that are defined on sequelize with the tables that alredy exists
// in the database. It creates models as tables that do not exist in the DB.
sequelize
  .sync()
  .then(() => {
    console.log("Sequelize Initialised!!");

    // Attaching the Authentication and Auteur Routes to the app.
    app.use("/auteurs", AuteurRoutes);
    app.use("/livres", LivreRoutes);

    app.listen(5000, () => {
      console.log("Server Listening on PORT:", 5000);
    });
  })
  .catch((err) => {
    console.error("Sequelize Initialisation threw an error:", err);
  });