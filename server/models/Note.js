const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "you must have something in"],
        minLength: [3, "note must be 3 or more chars"]
    },
    title : {
        type: String,
        required: [true, "title you must have something in"],
        minLength: [2, "title must be 2 or more chars"]
    },
    important: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

const Note = mongoose.model("Note", NoteSchema);
module.exports = Note;