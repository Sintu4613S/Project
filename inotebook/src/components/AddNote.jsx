import React, { useContext, useState } from "react"
import notecontext from "../context/Notes/noteContext"
const AddNote = () => {
  // make  a context variable to access the context  values and function defined in the noteContext.jsx. useContext is a hook that allows us to access the context values and functions in a functional component.
  const context = useContext(notecontext)
  // eslint-disable-next-line
  // Addig the note by calling the addNote function from the context and passing the title, description, and tag of the note as arguments and initial value is empty string.
  const { addNote } = context
  const [note, setNote] = useState({ title: "", description: "", tag: "" })
  // console.log(addNote)
  const handleAddNote = (e) => {
    // e.preventDefault() is used to prevent the default behavior of the form submission, which is to reload the page. By calling e.preventDefault(), we can handle the form submission in our own way without triggering a page refresh.
    e.preventDefault()
    // Here adding the new Note by calling the addNote function fromthe context and passing the title, description, and tag of the note as arguments. id,userand date are generated at the backend server.
    addNote(note.title, note.description, note.tag)
  }
  // onChange is used to update the state of the note object whenever the user types in the input fields.
  const onChange = (e) => {
    // setNote is used to update the state of the note object. It takes the current state of the note object and updates the specific property (title, description, or tag) based on the name attribute of the input field that triggered the onChange event.
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
        // make a form to add a note with title, description and tag input fields and a submit button. onChange event is used to update the state of the note object whenever the user types in the input fields. handleAddNote function is called when the submit button is clicked to add the new note.
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
