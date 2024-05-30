const AuteurModel = require("./../modeles/AuteurModel");
const LivreModel = require("./../modeles/LivreModel");

module.exports = {
  getAuteur: (req, res) => {
    const {
      params: { auteurId },
    } = req;

    AuteurModel.findAuteur({ id: auteurId })
      .then((auteur) => {
        return res.status(200).json({
          status: true,
          data: auteur.toJSON(),
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
    });
  },

  createAuteur: (req, res) => {
    const { body } = req;

    AuteurModel.createAuteur(body)
      .then((auteur) => {
        return res.status(200).json({
          status: true,
          data: auteur.toJSON(),
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  updateAuteur: (req, res) => {
    const {
      auteur: { auteurId },
      body: payload,
    } = req;

    // IF the payload does not have any keys,
    // THEN we can return an error, as nothing can be updated
    if (!Object.keys(payload).length) {
      return res.status(400).json({
        status: false,
        error: {
          message: "Body is empty, hence can not update the auteur.",
        },
      });
    }

    AuteurModel.updateAuteur({ id: auteurId }, payload)
      .then(() => {
        return AuteurModel.findAuteur({ id: auteurId });
      })
      .then((auteur) => {
        return res.status(200).json({
          status: true,
          data: auteur.toJSON(),
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  deleteAuteur: (req, res) => {
    const {
      params: { auteurId },
    } = req;

    AuteurModel.deleteAuteur({ id: auteurId })
      .then((numberOfEntriesDeleted) => {
        return res.status(200).json({
          status: true,
          data: {
            numberOfAuteursDeleted: numberOfEntriesDeleted
          },
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  getAllAuteurs: (req, res) => {
    AuteurModel.findAllAuteurs(req.query)
      .then((auteurs) => {
        return res.status(200).json({
          status: true,
          data: auteurs,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  changeRole: (req, res) => {
    const {
      params: { auteurId },
      body: { role },
    } = req;

    AuteurModel.updateAuteur({ id: auteurId }, { role })
      .then(() => {
        return AuteurModel.findAuteur({ id: auteurId });
      })
      .then((auteur) => {
        return res.status(200).json({
          status: true,
          data: auteur.toJSON(),
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },
};