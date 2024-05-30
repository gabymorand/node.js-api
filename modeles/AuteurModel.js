const { DataTypes } = require("sequelize");

const AuteurModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  prenom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date_naissance: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  nationalite: {
    type: DataTypes.STRING,
    allowNull: true,
  }
};

module.exports = {
  initialise: (sequelize) => {
    this.model = sequelize.define("auteur", AuteurModel);
  },

  createAuteur: (auteur) => {
    return this.model.create(auteur);
  },

  findAuteur: (query) => {
    return this.model.findOne({
      where: query,
    });
  },

  updateAuteur: (query, updatedValue) => {
    return this.model.update(updatedValue, {
      where: query,
    });
  },

  findAllAuteurs: (query) => {
    return this.model.findAll({
      where: query
    });
  },

  deleteAuteur: (query) => {
    return this.model.destroy({
      where: query
    });
  }
};