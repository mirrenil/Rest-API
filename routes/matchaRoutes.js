import express from "express";
import {
  createMatcha,
  getMatchas,
  getMatcha,
  deleteMatcha,
  updateMatcha,
} from "../controllers/matchas.js";

export const router = express.Router();

//GET
router.get("/", getMatchas);

//POST
router.post("/", createMatcha);

//GET
router.get("/:id", getMatcha);

//PUT
router.put("/", updateMatcha);

//DELETE
router.delete("/:id", deleteMatcha);

export default router;
