
import { Router } from "express";
import User from "../modules/User.js";
import { body, validationResult } from 'express-validator';
const router = Router();
// Api is -> http://loacalhost:5000/api/auth
router.post('/',
  [
    body('name', 'Enter a Name').isLength({ min: 2, max: 100 }),
    body('email', 'Enter a Valid Email').isEmail(),
    body('password', 'Password mustbe atleast 8 characters').isLength({ min: 8, max: 16 })
  ],
  async (req, res) => {
    //Errros that contains the validation errors from the above rules
    const errors = validationResult(req);
    // If there are errors, return bad request and the errors in json format
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email })
      if (user) {
        return res.status(401).json({ error: "Sorry User With This Email is Already exist" })
      }

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      })
      res.json(user)
    }
    catch (err) {
      console.log(err.message)
      res.status(500).send("Some Error Occured")
    }

    //If there are no errors, create a new user and save it to the database
    // res.send("Data saved successfully" + '\n' + JSON.stringify(req.body, null, 2));
    // console.log(req.body)
    // const user = new User(req.body);
    // const saveData = user.save();
    // res.send("Data saved successfully" + '\n' + JSON.stringify(req.body, null, 2) + '\n' + JSON.stringify(saveData, null, 2));
  })
export default router;