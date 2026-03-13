import  { model, Schema } from "mongoose";
import { IExpense } from "../@types/types";

const expenseSchema = new Schema<IExpense>({
  item: {
    type: String,
    required: true
  },

  amount: {
    type: Number,
    required: true
  },

  department: {
    type: String,
    enum: ["Sales", "Engineering", "HR", "Ops"],
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  }
});

const Expense = model<IExpense>("Expense", expenseSchema);

export default Expense;