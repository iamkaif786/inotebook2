import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = [];
    const [notes, setnotes] = useState(notesInitial)

    //Get all Notes
    const getNotes = async () => {
        //API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyYmE3NmQ5MzE4NGYyZGY0Y2Q4ZmUyIn0sImlhdCI6MTY4MDY2NjI3NX0.FSakM5J6zELZ_nPagwoLCMuye-zLwLC6czhGDDu4_uk"
            }
        });
        const json = await response.json();
        setnotes(json);

    }
    //Add a Note
    const addNote = async (title, description, tag) => {
        //API Call
        // eslint-disable-next-line
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyYmE3NmQ5MzE4NGYyZGY0Y2Q4ZmUyIn0sImlhdCI6MTY4MDY2NjI3NX0.FSakM5J6zELZ_nPagwoLCMuye-zLwLC6czhGDDu4_uk"
            },
            body: JSON.stringify({ title, description, tag })
        });

        const note = await response.json();
        setnotes(notes.concat(note))        
    }

    //Delete a Note
    const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyYmE3NmQ5MzE4NGYyZGY0Y2Q4ZmUyIn0sImlhdCI6MTY4MDY2NjI3NX0.FSakM5J6zELZ_nPagwoLCMuye-zLwLC6czhGDDu4_uk"
            }
        });
        // eslint-disable-next-line
        const json = await response.json();
        //Logic to edit in client
        const newNotes = notes.filter((note) => { return note._id !== id });
        setnotes(newNotes);
    }

    //Edit a Note
    const editNote = async (id, title, description, tag) => {
        //API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyYmE3NmQ5MzE4NGYyZGY0Y2Q4ZmUyIn0sImlhdCI6MTY4MDY2NjI3NX0.FSakM5J6zELZ_nPagwoLCMuye-zLwLC6czhGDDu4_uk"
            },
            body: JSON.stringify({ title, description, tag })
        });
        // eslint-disable-next-line
        const json = response.json();

        let newNotes = JSON.parse(JSON.stringify(notes));
        //Logic to edit in client
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setnotes(newNotes);
    }
    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;