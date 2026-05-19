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
      <div>
        {/* Button trigger modal */}
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Launch demo modal
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModalCenter"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
