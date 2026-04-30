import mongoose, { Schema } from 'mongoose';
//const Schema = mongoose;

const UserSchema = new Schema({
  Fname: {
    type: String,
    required: true,
  },
  Lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
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

const user = mongoose.model('user', UserSchema);
export default user