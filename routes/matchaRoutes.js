import express from "express";
import {
  createMatcha,
  getMatchas,
  getMatcha,
  deleteMatcha,
  updateMatcha,
} from "../controllers/matchas.js";

export const router = express.Router();

//GET ALL MATCHAS
router.get("/", getMatchas);

//POST
router.post("/", createMatcha);

//GET ONE MATCHA
router.get("/:id", getMatcha);

//PUT
router.put("/:id", updateMatcha);

//DELETE
router.delete("/:id", deleteMatcha);

export default router;
