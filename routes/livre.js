const router = require("express").Router();

// Controller Imports
const LivreController = require("./../controllers/LivreController");

router.patch(
  "/",
  [],
  LivreController.updateLivre
);

router.get(
  "/all",
  [],
  LivreController.getAllLivres
);

router.post(
  "/",
  [],
  LivreController.createLivre
);

router.delete(
  "/:livreId",
  [],
  LivreController.deleteLivre
);

module.exports = router;