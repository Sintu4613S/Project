import React from "react"
import Note from "./Note";

export default function Home() {

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
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Example textarea
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              defaultValue={""}
            />
            <div className="col-12 my-2">
              <button className="btn btn-primary" type="submit">Submit form</button>
            </div>
          </div>
          <Note />
        </>
      </div>
    </div>

  )
}
