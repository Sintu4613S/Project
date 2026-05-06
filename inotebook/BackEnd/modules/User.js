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
// this is the method to create the model for the user and we can use this model to create the user in the database and we can also use this model to find the user in the database and return the response to the client.
const User = mongoose.model('User', UserSchema);
// this is the method to create the index for the email field and we can use this index to find the user in the database and return the response to the client.
User.createIndexes();
export default User

