const router = require("express").Router();
const apiController = require("../../controllers/userController");

router
  .route("/")
  .get(apiController.findUser)
  .post(apiController.createUser);

router
  .route("/:id")
  .get(apiController.findByUserId)
  .put(apiController.updateUser)
  .delete(apiController.removeUser);

module.exports = router;