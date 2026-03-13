import express from "express";
import expenseController from "../controller/expenseController";

const router = express.Router();

router.post("/expenses", expenseController.createExpense);

router.get("/expenses", expenseController.getExpenses);

router.get("/expenses/department-total", expenseController.departmentTotal);

export default router;