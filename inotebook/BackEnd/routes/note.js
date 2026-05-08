import { Router } from "express";
import fetchuser from '../middleware/fetchuser.js';
import { body, validationResult } from "express-validator";
import Note from '../modules/Note.js'

const router = Router();

// this is the method to handle the get request and we can use this method to return the response to the client. api path is http://localhost:5000/api/note/fetchnotes .
//Route 1: Get all the Notes using: GET "/api/note/fetchnotes". Login required
router.get('/fetchnotes', fetchuser, async (req, res) => {
  try {
    // this is the method to find the notes that are created by the user and return the response to the client.
    const note = await Note.find({ user: req.user.id })
    res.json(note)
  }
  catch (err) {
    res.status(500).send('Internal Server Error')
  }

})

//Route 2: create a new Note using: POST "/api/note/addnote". Login required

router.post('/getallnote', fetchuser,
  // define the some Validation for name, email & pass
  [
    body('title', 'Enter a title').isLength({ min: 3, max: 100 }),
    body('description', "Enter a description").isLength({ min: 3 }),
    body('tag', "tag must be atleast character").isLength({ min: 5, })
  ],
  // this is the method to handle the post request and we can use this method to save the data in the database and return the response to the client.
  async (req, res) => {
    try {
      // this is the method to destructure the data that we receive from the client and we can use this data to save in the database and return the response to the client.
      const { title, description, tag } = req.body
      // ValidationResult is the method to check the validation that we have defined in the above array and we can use this method to check the validation and return the errors if there are any errors in the validation.
      const errors = validationResult(req)
      // if there are errors then return a bad request and the errors in json format
      if (!errors.isEmpty) {
        return res.status(401).json({ errors: errors.array() });
      }
      // create a new note and save in the database and return the response to the client.
      const note = new Note({
        title, description, tag, user: req.user.id

      })
      // save the note in the database and return the response to the client.
      const savedNote = await note.save();
      // return the response to the client in json format.
      res.json(savedNote)
    }
    catch (error) {
      res.status(401).send("Internal Server error")

    }
  })
// Route 3: api path is http://localhost:5000/api/note/updatenote/:id  and we can use this api to update the note by id and return the response to the client. Login required 
router.put('/updatenote/:id', fetchuser, async (req, res) => {
  try {
    const { title, description, tag } = req.body
    // Create a newNote object and add the title description and tag to this object if they are exist in the request body and we can use this object to update the note in the database and return the response to the client.
    const newNote = {}
    if (title) { newNote.title = title }
    if (description) { newNote.description = description }
    if (tag) { newNote.tag = tag }
    // console.log(newNote)

    // this is the method to find the note by id and return the response to the client. where req.param.id is the
    // id of the note that we want to update and we can use this id to find the note in the database and return the response to the client.
    let note = await Note.findById(req.params.id)
    // console.log(req.params.id)
    if (!note) {
      return res.status(404).send("Not Found")
    } // if  upadated user id is not match  with user id
    // this is the method to check the user id that we receive from the client and the user id that we have in the database and if they are not match then return the response to the client.in whch note.user is the user id that we have in the database and req.user.id is the user id that we receive from the client and we can use this method to check the user id and return the response to the client.
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed")
    }
    // this is the method to find the note by id and update the note in the database and return the response to the client. where req.param.id is the id of the note that we want to update and we can use this id to find the note in the database and return the response to the client. $set is the method to set the newNote object that we have created above and { new: true } is the method to return the updated note in the response to the client.
    note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
    res.json(note)
  }
  catch (error) {
    res.status(401).send("Internal Server error")
  }
})

// Route 4: api path is http://localhost:5000/api/note/deletenote/:id  and we can use this api to delete the note by id and return the response to the client. Login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
  // this is the method to find the note by id and return the response to the client. where req.param.id is the id of the note that we want to delete and we can use this id to find the note in the database and return the response to the client.
  try {
    let note = await Note.findById(req.params.id)
    if (!note) {
      return res.status(404).send("Not Found")
    }
    // this is the method to check the user id that we receive from the client and the user id that we have in the database and if they are not match then return the response to the client.in whch note.user is the user id that we have in the database and req.user.id is the user id that we receive from the client and we can use this method to check the user id and return the response to the client.
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed")
    }
    // this is the method to find the note by id and delete the note from the database and return the response to the client. where req.param.id is the id of the note that we want to delete and we can use this id to find the note in the database and return the response to the client.
    note = await Note.findByIdAndDelete(req.params.id)
    res.json({ success: "note Has Been deleted", note })
  }
  catch (error) {
    res.status(401).send("Internal Server error")
  }
})
export default router
