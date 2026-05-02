

import { Router } from 'express';
import User from '../modules/User.js';
import { body, validationResult } from "express-validator";
import bcrypt from "bcrypt";

const router = Router();

// now we use the post method instead of get
router.post('/',
  // define the some Validation for name, email & pass
  [
    body('name', 'Enter a name').isLength({ min: 3, max: 100 }),
    body('email', "enter a Valid Email").isEmail(),
    body('pasword', "Password must be atleast 8 character").isLength({ min: 8, max: 16 })
  ],

  async (req, res) => {
    //Erros that contains th validation from the above
    const errors = validationResult(req)
    // if there are errors then return a bad request and the erriosr in json format
    if (!errors.isEmpty) {
      return res.status(401).json({ errors: errors.array() });
    }

    try {
      // check whether the user with same email is exist or not.
      let user = await User.findOne({ email: req.body.email })
      //if exist then return this
      if (user) {
        return res.status(401).json({ error: "Sorry User with this email already Exist" })
      }
      //it check the passowrd is or not
      if (!req.body.password) {
        res.status(401).json("Passwor is required")
      }
      // generate a Hash value  of the password to secure the Password.
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      // Load hash from your password DB
      await bcrypt.compare(req.body.password, secPass, (err, res) => {

        (res === true)
        console.log("Password is Match")

      });
      // true
      await bcrypt.compare("req.body.password", secPass, (err, res) => {
        res === false
        return 1;
      }); // false

      // nahi toh ye  data mongodb m store kro. 
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass
      })
      res.json(user)
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
export default router