const router = require("express").Router({ mergeParams: true });
const methodNotAllowed = require("../errors/methodNotAllowed");
const ratingsController = require("../ratings/ratings.controller");
const ratingsRouter = require("../ratings/ratings.router");
const controller = require("./notes.controller");


router.use("/:noteId/ratings", controller.noteExists, ratingsRouter)
//Notes route
router
  .route("/:noteId")
  .get(controller.read)
  .all(methodNotAllowed);
// .put(controller.update)
//   .delete(controller.delete)

//.post(controller.create)
router.route("/").get(controller.list).all(methodNotAllowed);

//router.use("/:noteId/ratings", ratingsRouter);
module.exports = router;
