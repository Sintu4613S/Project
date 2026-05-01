/*global process*/
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();

if (!process.env.MONGODB_URI) {
  throw new Error("Invalid MONGODB_URI in the .env file")
}
const connectToMongo = async () => {
  try {
    await
      mongoose.connect(process.env.MONGODB_URI)
    console.log("MongoDB connected Successfully")

  }
  catch (err) {
    console.log('Database Connection is Due to some Error', err)
    process.exit(1);
  }

}

export default connectToMongo
