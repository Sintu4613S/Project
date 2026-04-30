import connectToMongo from "./connectDb.js";
import express from "express";
import authRoutes from './routes/auth.js'
import noteRoutes from './routes/note.js'
connectToMongo();
const app = express()
const port = 3000
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/note', noteRoutes);

app.get('/', (req, res) => {
  res.send('Hello Sintu!')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})