import React from "react"
import Note from "./Note";
import AddNote from "./AddNote"


export default function Home() {

  return (
    <>
    // calling the AddNote component to add a new note and Note component to display the list of notes.
      <AddNote />

      <Note />
    </>
  )
}
