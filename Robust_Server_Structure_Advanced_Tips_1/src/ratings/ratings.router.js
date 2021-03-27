const ratingsRouter = require("express").Router({ mergeParams: true });
const methodNotAllowed = require("../errors/methodNotAllowed");
const router = require("../notes/notes.router");
const ratingsController = require("../ratings/ratings.controller");


ratingsRouter
  .route("/:ratingId")
  .get(ratingsController.read)
  .all(methodNotAllowed);

ratingsRouter.route("/").get(ratingsController.list);
//.post(ratingsController.create);

module.exports = ratingsRouter;