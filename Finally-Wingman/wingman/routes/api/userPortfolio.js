const router = require("express").Router();
const apiController = require("../../controllers/userController");

// get route -> index
router
  .route("/")
  .get(apiController.findPortfolio)
  .post(apiController.createPortfolio);

router
  .route("/:id")
  .get(apiController.findByPortfolioId)
  .put(apiController.updatePortfolio)
  .delete(apiController.removePortfolio);

module.exports = router;
