/* global process */
import jwt from 'jsonwebtoken'
import dotenv from "dotenv"
dotenv.config();

const fetchuser = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) {
    return res.status(401).send({ error: "Please Enter the Right Token Crecidental" })
  }
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET_KEY)
    req.user = data.newUser
    next();

  }
  catch (error) {
    console.log("JWT Verification Error:", error.message)
    res.status(401).send({ error: "Please Enter the Right Token Crecidental" })
  }

}


export default fetchuser