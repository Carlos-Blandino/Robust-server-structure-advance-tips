const path = require("path");
const notes = require(path.resolve("src/data/ratings-data"));
const ratings = require(path.resolve("src/data/ratings-data"));

function ratingExists(request, response, next) {
  const { ratingId } = request.params;
  const foundRating = ratings.find((rating) => rating.id === Number(ratingId));
  if (foundRating) {
    response.locals.rating = foundRating;
    return next()
  }
  next({
    status: 404,
    message: `Rating id not found: ${ratingId}`,
  });
}

function list(req, res, next) {
const {noteId }= req.params
console.log('noteId', noteId)
if(noteId){
  const response = ratings.filter((rating) => rating.noteId === Number(noteId));
  return res.json({data: response})
} else {
  res.json({ data: ratings });
}
  
}


function read(req, res, next) {
  const ratingId = Number(req.params.ratingId);
  const foundRating = res.locals.rating //notes.find((note) => (note.id = noteId));
  res.json({ data: foundRating });
}

module.exports = {
  list,
  read: [ratingExists, read]
};
