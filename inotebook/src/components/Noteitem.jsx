import React, { useContext } from "react"
import notecontext from "../context/Notes/noteContext"

const Noteitem = (props) => {
  // using the useContext hook to access the notecontext and get the deleteNote function from it. This allows us to delete a note when the delete button is clicked.  
  const context = useContext(notecontext)
  // eslint-disable-next-line
  // Destructuring the deleteNote function from the context to use it in the HandleDelete function.
  const { deleteNote } = context

  const HandleDelete = () => {
    // Delete the Note based on id. 
    deleteNote(note._id)
  }
  // const HandleEdit = () => {

  // }

  // Destructuring the note and updatenote from the props to use them in the component. note contains the details of the individual note, and updatenote is a function that allows us to update the note when the edit button is clicked. 
  const { note, updatenote } = props
  return (
    <>
      <div className="col-md-3 ">
        <div className="card my-3" >
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description}</p>
            <p className="card-text"><small className="text-muted">{note.tag}</small></p>

            <span className="material-symbols-outlined mx-2" onClick={HandleDelete}>
              delete
            </span>
            <span className="material-symbols-outlined mx-2" onClick={() => { updatenote(note) }}>
              edit_square
            </span>

          </div>

        </div>
      </div>
    </>
  )
}

export default Noteitem
