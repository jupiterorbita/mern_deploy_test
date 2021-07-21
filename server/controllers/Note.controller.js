const Note = require("../models/Note")

module.exports = {
    // READ ALL ---------------------------------
    findAll: (req, res) => {
        Note.find()
            .then(allNotes => {
                console.log("allNotes: ", allNotes);
                res.json(allNotes);
            })
            .catch(err => {
                console.log("read all err:", err);
                res.status(400).json(err);
            })
    },

    // READ ONE ----------------------------------
    findOne: (req, res) => {
        // Note.findById(req.params.id) // object
        Note.findOne({ _id: req.params.id }) // arr?
            .then(note => {
                console.log("note: ", note);
                res.json(note);
            })
            .catch(err => {
                console.log("ERROR", err);
                res.status(400).json(err);
            })
    },

    // CREATE ----------------------------------
    create: (req, res) => {
        Note.create(req.body)
            .then(newNote => {
                console.log("created new note: ", newNote);
                res.json(newNote);
            })
            .catch(err => {
                console.log("ERROR", err);
                res.status(400).json(err);
            })
    },

    // UPDATE --------------------------------
    findOneAndUpdate: (req, res) => {
        Note.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(updatedNote => {
                console.log("updatedNote:", updatedNote);
                res.json(updatedNote);
                // res.json({updatedNote: updatedNote, status: "ok update"});
            })
            .catch(err => {
                console.log("ERROR", err);
                res.status(400).json(err);
            })
    },

    // DELETE -------------------------------
    deleteOne : (req, res) => {
        console.log("deleting >>>", req.params.eeee);
        Note.deleteOne({_id: req.params.eeee})
            .then( result => res.json({result: result}))
            .catch( err => res.status(400).json({message: "error delete", error: err}))
    }
}