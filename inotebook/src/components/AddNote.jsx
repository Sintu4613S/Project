import React from 'react'
const AddNote = () => {
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
              placeholder="Add a Title"
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
              defaultValue={""}
            />
            <div className="col-12 my-2">
              <button className="btn btn-primary" type="submit">Submit</button>
            </div>
          </div>
        </>
      </div>
    </div>
  )
}

export default AddNote
