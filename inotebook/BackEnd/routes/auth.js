
import { Router } from "express";
import User from "../modules/User.js";
import { body, validationResult } from 'express-validator';
const router = Router();

router.post('/',
  [
    body('name').isLength({ min: 2, max: 100 }),
    body('email').isEmail(),
    body('password').isLength({ min: 8, max: 16 })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("Data saved successfully" + '\n' + JSON.stringify(req.body, null, 2));
    // console.log(req.body)
    // const user = new User(req.body);
    // const saveData = user.save();
    // res.send("Data saved successfully" + '\n' + JSON.stringify(req.body, null, 2) + '\n' + JSON.stringify(saveData, null, 2));
  })
export default router;