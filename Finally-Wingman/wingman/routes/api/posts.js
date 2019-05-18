const router = require("express").Router();
const apiController = require("../../controllers/userController");

// get route -> index
router
  .route("/")
  .get(apiController.findPost)
  .post(apiController.createPost);

router
  .route("/:id")
  .get(apiController.findByPostId)
  .put(apiController.updatePost)
  .delete(apiController.removePost);

module.exports = router;