import React, { useContext, useEffect, useRef, useState } from "react"
import notecontext from "../context/Notes/noteContext"
import Noteitem from "./Noteitem"
const Note = () => {
  const context = useContext(notecontext)
  // eslint-disable-next-line
  const { notes, fetchAllNotes, editNote } = context
  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })
  //console.log(notes)
  useEffect(() => {
    fetchAllNotes()
    // eslint-disable-next-line
  }, [])

  const ref = useRef(null)
  const refclose = useRef(null)
  //eslint-disable-next-line
  const updatenote = (curentNote) => {
    setNote({ id: curentNote._id, etitle: curentNote.title, edescription: curentNote.description, etag: curentNote.tag })
    ref.current.click()
  }
  // eslint-disable-next-line

  //eslint-disable-next-line
  const handleClick = () => {
    console.log("Updating the note...", note)
    editNote(note.id, note.etitle, note.edescription, note.etag)
    refclose.current.click()

  }
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
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
                  Edit Note
                </h5>

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    Title
                  </label>
                  <input type="text" className="form-control"
                    id="etitle" name="etitle"
                    value={note.etitle}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="edescription" name="edescription"
                    rows={2} style={{ resize: "none" }}
                    value={note.edescription}
                    onChange={onChange}
                  />
                  <div className="mb-3">
                    <label htmlFor="etag" className="form-label">
                      Tag
                    </label>
                    <input type="text" className="form-control"
                      id="etag" name="etag"
                      value={note.etag}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    ref={refclose}
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary" onClick={handleClick}>
                    Update Note
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
      </div>

    </>
  )
}

export default Note
