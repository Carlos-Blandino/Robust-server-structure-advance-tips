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
// function create(req, res) {
//   const text = res.locals.text;//const { data: { text } = {} } = req.body;
//   const newNote = {
//     id: notes.length + 1,
//     text,
//   };
//   notes.push(newNote);
//   res.status(201).json({ data: newNote });
// }

// function destroy(req, res) {
//   const { noteId } = req.params;
//   const index = notes.findIndex((note) => note.id === Number(noteId));
//   if (index > -1) {
//     notes.splice(index, 1);
//   }
//   res.sendStatus(204);
// }

// function hasText(req, res, next) {
//   const { data: { text } = {} } = req.body;

//   if (text) {
//     res.locals.text = text;
//     return next();
//   }
//   next({ status: 400, message: "A 'text' property is required." });
// }
// function noteExists(req, res, next) {
//   const noteId = Number(req.params.noteId);
//   const foundNote = notes.find((note) => note.id === noteId);
//   if (foundNote) {
//     res.locals.note = foundNote;
//     return next();
//   }
//   next({
//     status: 404,
//     message: `Note id not found: ${req.params.noteId}`,
//   });
// }
// function update(req, res) {
//   const noteId = Number(req.params.noteId);
//   const foundNote = res.locals.note;// notes.find((note) => note.id === noteId);

//   const text = res.locals.text;//const { data: { text } = {} } = req.body;

//   foundNote.text = text;

//   res.json({ data: foundNote });
// }


function list(req, res, next) {

  res.json({ data: ratings });
}


function read(req, res, next) {
  const ratingId = Number(req.params.ratingId);
  const foundRating = res.locals.rating //notes.find((note) => (note.id = noteId));
  res.json({ data: foundRating });
}



module.exports = {
 
  list,
  read: [ratingExists, read],

};
//   update: [noteExists, hasText, update],
//   delete: destroy, 
//create: [hasText, create],