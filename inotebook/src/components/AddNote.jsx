import React, { useContext, useState } from "react"
import notecontext from "../context/Notes/noteContext"
const AddNote = () => {
  const context = useContext(notecontext)
  // eslint-disable-next-line
  const { addNote } = context
  const [note, setNote] = useState({ title: "", description: "", tag: "" })
  // console.log(addNote)
  const handleAddNote = (e) => {
    e.preventDefault()
    addNote(note.title, note.description, note.tag)
  }
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  return (
    <div className='container'>
      <div className="container my-3 text-center">
        <h1>Welcome to iNotebook</h1>
        <p>Your personal note-taking app.</p>
      </div>

      <div className="container my-3">
        <h2>Add a Note</h2>
        <>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input type="text" className="form-control"
              id="title" name="title"
              value={note.title}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description" name="description"
              rows={2} style={{ resize: "none" }}
              value={note.description}
              onChange={onChange}
            />
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Tag
              </label>
              <input type="text" className="form-control"
                id="tag" name="tag"
                value={note.tag}
                onChange={onChange}
              />
            </div>
            <div className="col-12 my-2">
              <button className="btn btn-primary" type="submit" onClick={handleAddNote}>Submit</button>
            </div>
          </div>
        </>
      </div>
    </div>
  )
}

export default AddNote
