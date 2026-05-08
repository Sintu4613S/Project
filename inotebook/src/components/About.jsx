import React, { useContext } from "react"
import notecontext from "../context/Notes/noteContext"

export default function About() {
  const a = useContext(notecontext)
  return (
    <div>
      <h1>This is a About {a.name} </h1>
    </div>
  )
}
