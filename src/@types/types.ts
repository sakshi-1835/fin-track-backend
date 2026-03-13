import type { Document } from "mongoose";



export interface IExpense extends Document {
  item: string;
  amount: number;
  department: string;
  date?: Date;
}