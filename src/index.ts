import  express  from "express";
import connectDB from "./config/db";
import cors from "cors";
import expenseRoutes from "./routes/expenseRoutes";
import { PORT } from "./config/enviornment";

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", expenseRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});