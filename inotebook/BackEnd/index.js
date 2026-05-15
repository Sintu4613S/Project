import express from 'express'
import connectToMongo from './connectDb.js';
import authRoutes from './routes/auth.js'
import noteRoutes from './routes/note.js'
import cors from 'cors'
connectToMongo()

const app = express()
const port = 5000

app.use(cors())
// this is the method to parse the json data that we receive from the client and we can use this method to access the data in the req.body object.
app.use(express.json())

// this is the method to use the routes that we have defined in the routes/auth.js file and we can use this method to handle the requests that we receive from the client and return the response to the client.
app.use('/api/auth', authRoutes)
app.use('/api/note', noteRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})