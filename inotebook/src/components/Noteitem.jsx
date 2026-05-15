import React, { useContext } from "react"
import notecontext from "../context/Notes/noteContext"

const Noteitem = (props) => {
  const context = useContext(notecontext)
  // eslint-disable-next-line
  const { deleteNote } = context
  const HandleDelete = () => {
    deleteNote(note._id)
  }
  // const HandleEdit = () => {

  // }
  const { note } = props
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
            <span className="material-symbols-outlined mx-2">
              edit_square
            </span>

          </div>

        </div>
      </div>
    </>
  )
}

export default Noteitem
