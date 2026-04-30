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

  comments: [{
    body: String,
    date: Date
  }],

})

const notes = mongoose.model('notes', NotesSchema);
export default notes