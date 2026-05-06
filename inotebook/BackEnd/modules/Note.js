import mongoose, { Schema } from 'mongoose';
//const Schema = mongoose;

const NotesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  },

  tag: {
    body: String,
    date: Date
  }

})

const Notes = mongoose.model('Note', NotesSchema);
export default Notes