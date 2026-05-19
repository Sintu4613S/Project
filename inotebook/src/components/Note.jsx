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
  const updatenote = (note) => {
    console.log("updete")
    ref.current.click()

  }

  return (
    <>
      <div>
        {/* Hidden trigger for programmatic open */}
        <button
          type="button"
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalCenter"
          ref={ref}

        >
          Open modal
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex="-1"
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
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
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
