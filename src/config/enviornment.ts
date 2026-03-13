import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT ?? 3001;
export const MONGO_DB_URI = process.env.MONGO_URI ?? "";
// export const JWT_Secret = process.env.JWT_secret;