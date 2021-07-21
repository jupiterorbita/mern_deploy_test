import React, { useState } from 'react';
import axios from "axios";
import { navigate } from "@reach/router"

const Create = (props) => {

    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [important, setImportant] = useState(false);
    const [dbErrors, setDBErrors] = useState([]);

    const formCreate = (e) => {
        e.preventDefault();
        console.log("submit!!!!");

        const newNote = {
            content: content,
            important,
            title
        }

        axios.post("http://localhost:8000/api/notes", newNote)
            .then(res => {
                console.log(res);
                setContent("");
                setImportant(false);
                navigate("/")

            })
            .catch(err => {
                console.log("CATCH triggered");
                console.log(err.response.data)
                const {errors} = err.response.data;
                const messages = Object.keys(errors).map(error => errors[error].message);
                // const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                // const errorArr = []; // Define a temp error array to push the messages in
                // for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                //     errorArr.push(errorResponse[key].message)
                // }
                // // Set Errors
                setDBErrors(messages);
            })
    }


    return (
        <div>
            {dbErrors.map((err, index) => <p key={index}>{err}</p>)}
            {JSON.stringify(content)},
            {JSON.stringify(title)},
            {JSON.stringify(important)}
            <form onSubmit={formCreate}>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="title"/>
                <input type="text" value={content} onChange={e => setContent(e.target.value)} placeholder="content"/>
                important? <input type="checkbox" checked={important} onChange={e => setImportant(e.target.checked)} />
                <button>submit</button>
            </form>
        </div>
    )
}

export default Create
