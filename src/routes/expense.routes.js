import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.js";
import {
  getExpenses,
  createExpense,
  updateExpense,
  deleteExpense,
  getExpense,
} from "../controllers/expense.controller.js";

const router = Router();

router.get("/expenses", validateToken, getExpenses);
router.get("/expenses/:id", validateToken, getExpense);
router.post("/expenses", validateToken, createExpense);
router.delete("/expenses/:id", validateToken, deleteExpense);
router.put("/expenses/:id", validateToken, updateExpense);

export default router;
