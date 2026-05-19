import React, { useState } from "react"
import Note from "./Note";
import AddNote from "./AddNote"
import Modal from "./Modal"

export default function Home() {
  const [show, setShow] = useState(false)

  return (
    <>
      <AddNote />
      <Modal show={show} onHide={() => setShow(false)} />

      <Note />
    </>
  )
}
