import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { navigate } from "@reach/router";


const Update = ({ id }) => {

    // const [noteToUpdate, setNoteToUpdate] = useState({})
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [important, setImportant] = useState(false)
    const [dbErrors, setDBErrors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/notes/" + id)
            .then(res => {
                console.log(res.data);
                // setNoteToUpdate(res.data);
                // OR
                setContent(res.data.content)
                setImportant(res.data.important)
            })
            .catch(err => {
                console.log(err)
            });
    }, [id])


    const fromUpdate = (e) => {
        e.preventDefault();

        axios.put("http://localhost:8000/api/notes/" + id, {
            content,
            title,
            important
        })
            .then(updatedNote => {
                console.log("SUCCESS UPDATE!! :", updatedNote);
                navigate("/");
            })
            .catch(err => {
                console.log("CATCH ERROR! 400")
                console.log(err);
                console.log(err.response);
                const { errors } = err.response.data;
                const messages = Object.keys(errors).map(error => errors[error].message);
                setDBErrors(messages);
            })
    }

    return (
        <div>
            {dbErrors.map((err, index) => <p key={index}>{err}</p>)}
            {JSON.stringify(content)},
            {JSON.stringify(title)},
            {JSON.stringify(important)}
            <form onSubmit={fromUpdate}>
                {/* <input type="text" value={noteToUpdate.content} onChange={e => {
                                                                setNoteToUpdate(
                                                                    {
                                                                        ...noteToUpdate,
                                                                        content: e.target.value
                                                                    }
                                                                )
                                                                }} /> */}
                <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
                <input type="text" value={content} onChange={e => setContent(e.target.value)}/>

                important? <input type="checkbox" checked={important} onChange={e => setImportant(e.target.checked)} />
                <button>submit</button>
            </form>
        </div>
    )
}

export default Update
