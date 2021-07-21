import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios"

const ViewOne = (props) => {
    console.log(props)

    const [thisNote, setThisNote] = useState({})


    useEffect(()=>{
        axios.get("http://localhost:8000/api/notes/" + props.id)
            .then( res => {
                console.log(res.data);
                setThisNote(res.data);
            })
            .catch()
    }, [props.id])

    return (
        <div>
            <h3>{thisNote.content}</h3>
                <p>{thisNote.important? "IMPORTANT" : ""}</p>
            {/* {JSON.stringify(thisNote)} */}
        </div>
    )
}

export default ViewOne
