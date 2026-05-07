import mongoose, { Schema } from 'mongoose';
//const Schema = mongoose;

const NoteSchema = new Schema({
  // this is the method to create the reference for the user and we can use this reference to find the user in the database and return the response to the client.
  user: {
    //type is defined that we use the ObjectId type to create the reference for the user and we can use this reference to find the user in the database and return the response to the client.
    type: mongoose.Schema.Types.ObjectId,
    // ref is defined that we use the User model to create the reference for the user and we can use this reference to find the user in the database and return the response to the client.
    ref: 'User'
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    require: true
  },
  tag: {
    type: String,
    default: "General"
  },
  date: {
    type: Date,
    default: Date.now
  }

})

const Note = mongoose.model('note', NoteSchema);
export default Note