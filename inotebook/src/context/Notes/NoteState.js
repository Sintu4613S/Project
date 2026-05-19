import React, { useState } from "react";
import Notecontext from "./noteContext"

const Notestate = (props) => {
  const host = "http://localhost:5000"
  const initialNotes = []
  const [note, setnote] = useState(initialNotes)
  const fetchAllNotes = async () => {
    const response = await fetch(`${host}/api/note/fetchnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuZXdVc2VyIjp7ImlkIjoiNjlmOGRkZWVjOWFkNDg2OGRhN2FhM2RjIn0sImlhdCI6MTc3NzkxNzQyMn0.9Esq-jVY29L19-XgDvIBv_NZj936_PoWpISycKTQvsM"
      }
    });
    const json = await response.json()
    setnote(json)
    // console.log(json)
  }




  //Add a Note
  const addNote = async (title, description, tag) => {
    //Api call to edit a note
    // eslint-disable-next-line
    const response = await fetch(`${host}/api/note/getallnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuZXdVc2VyIjp7ImlkIjoiNjlmOGRkZWVjOWFkNDg2OGRhN2FhM2RjIn0sImlhdCI6MTc3NzkxNzQyMn0.9Esq-jVY29L19-XgDvIBv_NZj936_PoWpISycKTQvsM"
      },
      body: JSON.stringify({ title, description, tag })
    });
    const result = await response.json();
    console.log(result)
    const newNote = { _id: Date.now().toString(), title: title, description: description, tag: tag };
    setnote([...note, newNote]);


  };

  //Delete a Note
  const deleteNote = async (id) => {
    //Api call to Delete note
    const response = await fetch(`${host}/api/note/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuZXdVc2VyIjp7ImlkIjoiNjlmOGRkZWVjOWFkNDg2OGRhN2FhM2RjIn0sImlhdCI6MTc3NzkxNzQyMn0.9Esq-jVY29L19-XgDvIBv_NZj936_PoWpISycKTQvsM"
      },

    });

    const result = await response.json();
    console.log(result)

    setnote(note.filter((note) => note.id !== id));
  };
  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //Api call to edit a note

    const response = await fetch(`${host}/api/note/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });
    if (response.ok) {
      // eslint-disable-next-line
      const json = await response.json();
    }
    else {
      console.log("Server return an error")
    }



    // Logic to edit a note
    const newNotes = note.map((note) => {
      if (note._id === id) {
        return { ...note, title, description, tag }
      }
      return note;
    });
    setnote(newNotes);
    // return result;
  }
  return (
    <Notecontext.Provider value={{ notes: note, addNote, deleteNote, editNote, fetchAllNotes }}>
      {props.children}
    </Notecontext.Provider>

  );

}
export default Notestate