import { Request, Response } from "express";
import Expense from "../models/expense";

const expenseController = {
  async createExpense(req: Request, res: Response) {
    try {
      const expense = await Expense.create(req.body);
      res.status(201).json(expense);
    } catch (error) {
      res.status(500).json({ message: "Error creating expense" });
    }
  },

  async getExpenses(req: Request, res: Response) {
    try {
      const expenses = await Expense.find();
      res.json(expenses);
    } catch (error) {
      res.status(500).json({ message: "Error fetching expenses" });
    }
  },

  async departmentTotal(req: Request, res: Response) {
    try {
      const totals = await Expense.aggregate([
        {
          $group: {
            _id: "$department",
            totalAmount: { $sum: "$amount" },
          },
        },
      ]);

      res.json(totals);
    } catch (error) {
      res.status(500).json({ message: "Aggregation error" });
    }
  },
};

export default expenseController;
