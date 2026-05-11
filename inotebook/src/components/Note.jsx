import React, { useContext } from "react"
import notecontext from "../context/Notes/noteContext"
const Note = () => {
  const context = useContext(notecontext)
  // eslint-disable-next-line
  const { notes, setNotes } = context

  console.log(notes)
  return (
    <div className="container my-3">
      <h2>Your Note</h2>
      {notes.map((note) => {
        return (
          <div className="row my-3" key={note._id} >

          </div>
        )
      })}
    </div>
  )
}

export default Note
