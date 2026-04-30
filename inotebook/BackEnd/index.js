import connectToMongo from "./connectDb.js";
import express from "express";
connectToMongo();

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Sintu!')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})