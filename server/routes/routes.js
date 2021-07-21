const Note = require("../controllers/Note.controller");

module.exports = (app) => {
    app.get("/api/notes", Note.findAll);
    app.get("/api/notes/:id", Note.findOne);
    app.post("/api/notes", Note.create);
    app.put("/api/notes/:id", Note.findOneAndUpdate);
    app.delete("/api/notes/:eeee", Note.deleteOne);
}