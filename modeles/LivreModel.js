const { DataTypes } = require("sequelize");

const LivreModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  titre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date_parution: {
    type: DataTypes.STRING,
    allowNull: false,
  }
};

module.exports = {
  initialise: (sequelize) => {
    const {models} = sequelize;
    this.model = sequelize.define("livre", LivreModel);
    this.auteurModel = models.auteur;
  },

  createLivre: (livre) => {
    return this.model.create(livre);
  },

  findLivre: (query) => {
    return this.model.findOne({
      where: query,
    });
  },

  updateLivre: (query, updatedValue) => {
    return this.model.update(updatedValue, {
      where: query,
    });
  },

  findAllLivres: (query) => {
    return this.model.findAll({
      where: query,
      include: {
        model: this.auteurModel
      }
    });
  },

  deleteLivre: (query) => {
    return this.model.destroy({
      where: query
    });
  }
};