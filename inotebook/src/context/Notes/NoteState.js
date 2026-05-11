import React, { useState } from "react";
import Notecontext from "./noteContext"

const Notestate = (props) => {
  const initialNotes = [
    {
      "_id": "69fc207aadb86e0c511299eb",
      "user": "69f8ddeec9ad4868da7aa3dc",
      "title": "My Title2",
      "description": "Hi New Description is added here2",
      "tag": "friend2",
      "date": "2026-05-07T05:17:46.317Z",
      "__v": 0
    },
    {
      "_id": "69fc27b64bb8a067dbec6448",
      "user": "69f8ddeec9ad4868da7aa3dc",
      "title": "My Book2",
      "description": "Hi Reading a Book is not just a reading",
      "tag": "Book2",
      "date": "2026-05-07T05:48:38.027Z",
      "__v": 0
    },
    {
      "_id": "69fc27b64bb8a067dbec6449",
      "user": "69f8ddeec9ad4868da7aa3dc",
      "title": "My Book2",
      "description": "Hi Reading a Book is not just a reading",
      "tag": "Book2",
      "date": "2026-05-07T05:48:38.719Z",
      "__v": 0
    },
    {
      "_id": "69fc28e14bb8a067dbec644a",
      "user": "69f8ddeec9ad4868da7aa3dc",
      "title": "welcome",
      "description": " Welcome to My Class",
      "tag": "Welcome To All",
      "date": "2026-05-07T05:53:37.097Z",
      "__v": 0
    },
    {
      "_id": "69fc29084bb8a067dbec644b",
      "user": "69f8ddeec9ad4868da7aa3dc",
      "title": "Welcome By name",
      "description": " Welcome to {name} My Class",
      "tag": "Welcome {name}",
      "date": "2026-05-07T05:54:16.497Z",
      "__v": 0
    },
    {
      "_id": "69fc298c4bb8a067dbec644c",
      "user": "69f8ddeec9ad4868da7aa3dc",
      "title": "Welcome back",
      "description": " Welcome to the Jungle",
      "tag": "movie",
      "date": "2026-05-07T05:56:28.810Z",
      "__v": 0
    },
    {
      "_id": "69fdb277c0fbffd5d6331c6a",
      "user": "69f8ddeec9ad4868da7aa3dc",
      "title": "Game of Thrones",
      "description": "Hi watching the Game Of the thrones is a mind blowing ",
      "tag": "Series",
      "date": "2026-05-08T09:52:55.403Z",
      "__v": 0
    }
  ]
  const [state, setState] = useState(initialNotes)
  return (
    <Notecontext.Provider value={{ notes: state, setNotes: setState }}>
      {props.children}
    </Notecontext.Provider>

  );

}
export default Notestate