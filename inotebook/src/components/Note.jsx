import React, { useContext } from "react"
import notecontext from "../context/Notes/noteContext"
import Noteitem from "./Noteitem"

const Note = () => {
  const context = useContext(notecontext)
  // eslint-disable-next-line
  const { notes, addNote } = context
  console.log(notes)

  return (
    <>
      <div className="row my-3">
        <h2>Your Note</h2>
        {notes.map((note) => {
          console.log(note._id)
          return <Noteitem note={note} key={note._id} />
        })}
      </div>
    </>

  )
}

export default Note
