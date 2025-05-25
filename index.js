import express from "express";
import { config } from "dotenv";
import cors from "cors";

import connectDB from "./config/connectDB.js";
import Routes from "./routes/Snippet.routes.js";

const app = express();
config();

const PORT = process.env.PORT;
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/v1/snippets", Routes);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Code Library API!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
