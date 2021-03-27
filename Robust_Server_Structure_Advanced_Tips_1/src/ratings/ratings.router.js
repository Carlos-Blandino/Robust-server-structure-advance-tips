const ratingsRouter = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const router = require("../notes/notes.router");
const ratingsController = require("../ratings/ratings.controller");


ratingsRouter
  .route("/:ratingId")
  .get(ratingsController.read)

  .all(methodNotAllowed);
  // .put(ratingsController.update)
  // .delete(ratingsController.delete)

ratingsRouter.route("/").get(ratingsController.list);
//.post(ratingsController.create);

module.exports = ratingsRouter;