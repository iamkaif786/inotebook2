import { useState } from "react";
import NoteContext from "./noteContext";
const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "64573added8a724df8ed1344",
            "user": "6455db27d19234d3345ac62c",
            "title": "My Title",
            "description": "Please access the playlist",
            "tag": "YouTube",
            "date": "2023-05-07T05:45:01.246Z",
            "__v": 0
        },
        {
            "_id": "64573ae0ed8a724df8ed2346",
            "user": "6455db27d19234d3345bc62c",
            "title": "My Title 2",
            "description": "Please access the playlist",
            "tag": "YouTube",
            "date": "2023-05-07T05:45:04.338Z",
            "__v": 0
        },
        {
            "_id": "64573ae0ed8a724df8ed2347",
            "user": "6455db27d19234d3345bc62c",
            "title": "My Title 2",
            "description": "Please access the playlist",
            "tag": "YouTube",
            "date": "2023-05-07T05:45:04.338Z",
            "__v": 0
        },
        {
            "_id": "64573ae0ed8a724df8ed2348",
            "user": "6455db27d19234d3345bc62c",
            "title": "My Title 2",
            "description": "Please access the playlist",
            "tag": "YouTube",
            "date": "2023-05-07T05:45:04.338Z",
            "__v": 0
        },
        {
            "_id": "64573ae0ed8a724df8ed2349",
            "user": "6455db27d19234d3345bc62c",
            "title": "My Title 2",
            "description": "Please access the playlist",
            "tag": "YouTube",
            "date": "2023-05-07T05:45:04.338Z",
            "__v": 0
        },
        {
            "_id": "64573ae0ed8a724df8ed2350",
            "user": "6455db27d19234d3345bc62c",
            "title": "My Title 2",
            "description": "Please access the playlist",
            "tag": "YouTube",
            "date": "2023-05-07T05:45:04.338Z",
            "__v": 0
        },
        {
            "_id": "64573ae0ed8a724df8ed2351",
            "user": "6455db27d19234d3345bc62c",
            "title": "My Title 2",
            "description": "Please access the playlist",
            "tag": "YouTube",
            "date": "2023-05-07T05:45:04.338Z",
            "__v": 0
        },
    ]
    const [notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;