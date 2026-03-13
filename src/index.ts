import  express  from "express";
import connectDB from "./config/db";
import cors from "cors";
import expenseRoutes from "./routes/expenseRoutes";
import { PORT } from "./config/enviornment";

const app = express();

connectDB();

app.use(cors({
  origin: "https://fin-track-frontend-jx8s8bxve-sakshi-1835s-projects.vercel.app/",
}));
app.use(express.json());

app.use("/api", expenseRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});