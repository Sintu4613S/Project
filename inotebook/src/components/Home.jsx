import React from "react"
import Note from "./Note";
import AddNote from "./AddNote"

export default function Home() {
  // calling the AddNote component to add a new note and Notecomponent to display the list of notes.
  return (
    <>
      <AddNote />
      <Note />
    </>
  )
}
