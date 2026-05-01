import mongoose, { Schema } from 'mongoose';
//const Schema = mongoose;

const UserSchema = new Schema({

  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  },

  // comments: [{
  //   body: String,
  //   date: Date
  // }],

})
const User = mongoose.model('User', UserSchema);
User.createIndexes();
export default User

