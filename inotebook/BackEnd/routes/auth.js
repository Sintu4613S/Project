/* global process */
import { Router } from 'express';
import User from '../modules/User.js';
import { body, validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

// this is the method to use the .nv file data in this file and we can use the data 
// by process.env.KEY_NAME
dotenv.config()


// this is the method to create a router object and we can use this router object to define the routes in this file and export it to index.js file and use it there.
const router = Router();

// now we use the post method instead of 
// now the Api path is http://localhost:5000/api/auth/createuser and we can use this api to create a new user and store in the database and return the response to the client.
//Route1: Create a User using: POST "/api/auth/createuser". No login required
router.post('/createuser',
  // define the some Validation for name, email & pass
  [
    body('name', 'Enter a name').isLength({ min: 3, max: 100 }),
    body('email', "enter a Valid Email").isEmail(),
    body('pasword', "Password must be atleast 8 character").isLength({ min: 8, max: 16 })
  ],
  // this is the method to handle the post request and we can use this method to save the data in the database and return the response to the client.
  async (req, res) => {
    //Erros that contains th validation from the above
    const errors = validationResult(req)
    // if there are errors then return a bad request and the errors in json format
    if (!errors.isEmpty) {
      return res.status(401).json({ errors: errors.array() });
    }

    try {
      // check whether the user with same email is exist or not.
      // User is the model that we have created in the modules/User.js file.
      let user = await User.findOne({ email: req.body.email })
      //if exist then return this
      if (user) {
        return res.status(401).json({ error: "Sorry User with this email already Exist" })
      }
      //it check the passowrd is or not
      if (!req.body.password) {
        res.status(401).json("Passwor is required")
      }
      // if password is exist then we have to hash the password by using bcryptjs and store the hashed password in the database
      //genSaltis the method to generate a salt and the number 10 is the number of rounds to genearte the salt .
      const salt = await bcrypt.genSalt(10);
      // this is the method to hash the password and store in the database
      const secPass = await bcrypt.hash(req.body.password, salt);

      // this is the method to create a new user and store in the database
      const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass
      })
      await newUser.save()
      // ye data se ek object banao jisme user ka id hoga
      const data = {
        newUser: {
          id: newUser.id
        }

      }
      //  generate a authtoken by using the jwt.sign() method and pass the data and secret key from .env file
      const authtoken = jwt.sign(data, process.env.JWT_SECRET_KEY)
      res.json({ authtoken })

      // res.json(user)
    }
    // catch kro agr koi error method m h toh
    catch (err) {
      console.log(err.message)

      res.status(500).send('Some error Occured')
    }


    //this is simple method to display the data
    // res.send("Data saved successfully" + '\n' + JSON.stringify(req.body))
    // console.log(req.body)


    // This metod is used to display data on http:localhost:5000/api/auth and add 
    // data in the MongoDb compass database.In this We can Add the mulitiple time same data.
    //So we use validator express  to make unique in every data.which means we can store it only one time.

    // const user = new User(req.body)
    // const saveUser = user.save()
    // res.send("Data saved Successfully" + '\n' + JSON.stringify(req.body, null, 2) + '\n' + JSON.stringify(saveUser, null, 2))
  })
// make a route for User Login and we can use this route to login the user and return the authtoken to the client and we can use this authtoken to access the protected routes.
//Route2: Authenticate a User using: POST "/api/auth/login". No login required
router.post('/login', [
  body('email',).isEmail(),
  body('password', "Password cannot be Null").exists()
],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty) {
      res.status(400).json({ errors: errors.array() })
    }
    // this is the method to get the email and password from the request body and we can use this email and password to check the user in the database and return the response to the client.
    const { email, password } = req.body
    try {
      let user = await User.findOne({ email })
      if (!user) {
        return res.status(401).json({ error: "Sorry, User not found" })
      }
      // ye method is used to compare the password that user enter and the hashed password that store in the database.
      console.log("Entered password:", password);
      console.log("Stored password:", user.password);
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ error: "Please enter the correct password" })
      }
      else {
        const data = {
          newUser: {
            id: user.id
          }
        }
        const authtoken = jwt.sign(data, process.env.JWT_SECRET_KEY)
        res.json({ authtoken })

      }
    }
    catch (err) {
      console.log(err.message)

      res.status(500).send('Internal Server Error')
    }

  })
export default router