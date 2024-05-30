const router = require("express").Router();

// Controller Imports
const AuteurController = require("./../controllers/AuteurController");
const LivreController = require("./../controllers/LivreController");

router.patch(
  "/",
  [],
  AuteurController.updateAuteur
);

router.get(
  "/all",
  [],
  AuteurController.getAllAuteurs
);

router.get(
  "/:auteurId",
  [],
  AuteurController.getAuteur
);

router.get(
  "/:auteurId/livres",
  [],
  LivreController.getAllLivres
);

router.post(
  "/",
  [],
  AuteurController.createAuteur
);

router.delete(
  "/:userId",
  [],
  AuteurController.deleteAuteur
);

module.exports = router;