import express from "express";
import cors from "cors";
import "./cron.js";

const app = express();

// ✅ Allow only your deployed frontend
app.use(cors({
  origin: process.env.CORS_ORIGIN,  // must be set in .env
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Serve temp folder
app.use("/temp", express.static("public/temp"));

// Body parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
import router from "./routes/file.routes.js";
app.use("/api/v1/file", router);

export { app };
