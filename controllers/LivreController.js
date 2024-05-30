const LivreModel = require("../modeles/LivreModel");

module.exports = {
  getLivre: (req, res) => {
    const {
      params: { livreId },
    } = req;

    LivreModel.findLivre({ id: livreId })
      .then((livre) => {
        return res.status(200).json({
          status: true,
          data: livre.toJSON(),
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  createLivre: (req, res) => {
    const { body } = req;

    LivreModel.createLivre(body)
      .then((livre) => {
        return res.status(200).json({
          status: true,
          data: livre.toJSON(),
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  updateLivre: (req, res) => {
    const {
      livre: { livreId },
      body: payload,
    } = req;

    // IF the payload does not have any keys,
    // THEN we can return an error, as nothing can be updated
    if (!Object.keys(payload).length) {
      return res.status(400).json({
        status: false,
        error: {
          message: "Body is empty, hence can not update the livre.",
        },
      });
    }

    LivreModel.updateLivre({ id: livreId }, payload)
      .then(() => {
        return LivreModel.findLivre({ id: livreId });
      })
      .then((livre) => {
        return res.status(200).json({
          status: true,
          data: livre.toJSON(),
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  deleteLivre: (req, res) => {
    const {
      params: { livreId },
    } = req;

    LivreModel.deleteLivre({ id: livreId })
      .then((numberOfEntriesDeleted) => {
        return res.status(200).json({
          status: true,
          data: {
            numberOfLivresDeleted: numberOfEntriesDeleted
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

  getAllLivres: (req, res) => {
    LivreModel.findAllLivres(req.query)
      .then((livres) => {
        return res.status(200).json({
          status: true,
          data: livres,
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
      params: { livreId },
      body: { role },
    } = req;

    LivreModel.updateLivre({ id: livreId }, { role })
      .then(() => {
        return LivreModel.findLivre({ id: livreId });
      })
      .then((livre) => {
        return res.status(200).json({
          status: true,
          data: livre.toJSON(),
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