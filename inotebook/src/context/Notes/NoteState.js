import React, { useState } from "react";
import Notecontext from "./noteContext"

const Notestate = (props) => {
  // Note Fetching at the backend server by using the host variable and fetch(`${host}/api/note/fetchnotes`) function with method and Auth token in the Header.
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
    console.log("Fetching all notes......")
    // response.json() is used to parse the JSON response from the server and convert it into a JavaScript object. The resulting object is then stored in the variable json.
    const json = await response.json()
    // setNote is used to update the state of notes with the new data after add a note.
    setnote(json)
    // console.log(json)
  }

  //Add a Note
  const addNote = async (title, description, tag) => {
    //Api call to add a note
    const response = await fetch(`${host}/api/note/getallnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuZXdVc2VyIjp7ImlkIjoiNjlmOGRkZWVjOWFkNDg2OGRhN2FhM2RjIn0sImlhdCI6MTc3NzkxNzQyMn0.9Esq-jVY29L19-XgDvIBv_NZj936_PoWpISycKTQvsM"
      },
      // body is used to send the data to the server in JSON format. It includes the title, description, and tag of the note being added.
      body: JSON.stringify({ title, description, tag })
    });
    const result = await response.json();
    console.log(result)
    // Logic to add a note
    // Date.now().toString() is used to generate a unique id for the new note.
    const newNote = { _id: Date.now().toString(), title: title, description: description, tag: tag };
    // (...note) is used to spread the existing notes in the new array, and newNote is added to the end of the array.
    setnote([...note, newNote]);


  };

  //Delete a Note
  const deleteNote = async (_id) => {
    //Api call to Delete note
    const response = await fetch(`${host}/api/note/deletenote/${_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuZXdVc2VyIjp7ImlkIjoiNjlmOGRkZWVjOWFkNDg2OGRhN2FhM2RjIn0sImlhdCI6MTc3NzkxNzQyMn0.9Esq-jVY29L19-XgDvIBv_NZj936_PoWpISycKTQvsM"
      },

    });
    //  Logic to delete a note
    const result = await response.json();
    console.log(result)
    //setNote is used to update the state of notes after deletion. 
    //note.filter is used to create a new array of notes that excludes the note with the specified _id.
    setnote(note.filter((note) => note._id !== _id));
  };

  //Edit a Note
  const editNote = async (id, title, description, tag) => {

    //Api call to edit a note
    const response = await fetch(`${host}/api/note/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuZXdVc2VyIjp7ImlkIjoiNjlmOGRkZWVjOWFkNDg2OGRhN2FhM2RjIn0sImlhdCI6MTc3NzkxNzQyMn0.9Esq-jVY29L19-XgDvIBv_NZj936_PoWpISycKTQvsM"
        //'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });
    if (response.ok) {
      const json = await response.json();
      console.log(json)
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