
import { Router } from "express";
//import User from "../modules/User.js";
const router = Router();
router.post('/', (req, res) => {
  console.log(req.body)
  res.send(req.body)
})
export default router