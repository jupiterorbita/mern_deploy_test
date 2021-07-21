import React, { useEffect, useState } from 'react';
import axios from "axios";
import thisStyle from "./Main.module.css";
import { Link } from "@reach/router"

const Main = (props) => {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        getNotesFromDB()
    }, [])

    const getNotesFromDB = () => {
        axios.get("http://localhost:8000/api/notes")
            .then(res => {
                console.log(res.data);
                setNotes(res.data);
            })
            .catch(err => console.log(err))
    }

    const deleteNote = (deleteID) => {
        console.log(deleteID);

        axios.delete("http://localhost:8000/api/notes/"+deleteID)
            .then( res => {
                console.log(res.data);
                // remove from DOM after success
                setNotes(notes.filter(note => note._id !== deleteID))
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            {/* {JSON.stringify(notes)} */}
            <h4>main</h4>
            {
                notes.map((note, i) => {
                    return (
                        <div key={note._id} className={thisStyle.this}>
                            <Link to={"/notes/"+ note._id } >

                                <p>{note.content} -
                                    {note.important ? "🆘" : ""} </p>
                                <p>{Date(note.createdAt)}</p>
                            </Link>

                            <Link to={"/notes/update/"+ note._id}> update note</Link> | 
                            <button onClick={ () => deleteNote(note._id)}>DELETE NOTE</button>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default Main
