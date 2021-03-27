const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const ratingsController = require("../ratings/ratings.controller");
const ratingsRouter = require("../ratings/ratings.router");
const controller = require("./notes.controller");


router.use("/:noteId/ratings", controller.noteExists, ratingsRouter)
//Notes route
router
  .route("/:noteId")
  .get(controller.read)
  .all(methodNotAllowed)
  .put(controller.update)
  .delete(controller.delete)


router.route("/").get(controller.list).post(controller.create).all(methodNotAllowed);

module.exports = router;
