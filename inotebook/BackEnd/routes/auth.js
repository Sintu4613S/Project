//import express from "express";
import { Router } from "express";
const router = Router();
router.get('/', (req, res) => {
  const obj = {
    name: "Sintu Kumar",
    Age: 21,
    Course: "JavaScript"
  }
  res.json(obj)
})
export default router