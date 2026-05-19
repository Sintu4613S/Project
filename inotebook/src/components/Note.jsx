import React, { useContext, useEffect, useRef } from "react"
import notecontext from "../context/Notes/noteContext"
import Noteitem from "./Noteitem"

const Note = () => {
  const context = useContext(notecontext)
  // eslint-disable-next-line
  const { notes, fetchAllNotes } = context
  //console.log(notes)
  useEffect(() => {
    fetchAllNotes()
    // eslint-disable-next-line
  }, [])

  const ref = useRef(null)
  const updatenote = () => {
    console.log("updete")
    ref.current = ref.current.click()

  }

  return (
    <>

      <div className="row my-3">
        <h2>Your Note</h2>
        {notes.map((note) => {
          return <Noteitem note={note} key={note._id} updatenote={updatenote} />
        })}
      </div>
    </>

  )
}

export default Note
