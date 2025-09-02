import express from "express";
import cors from "cors";
import "./cron.js";
import router from "./routes/file.routes.js";

const app = express();

app.use(cors(
  { origin: process.env.CORS_ORIGIN || "https://send-files-xi.vercel.app" }
));

app.use("/temp", express.static("public/temp"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Attach your API routes here
app.use("/api/v1/file", router);

// Export the fully configured app
export { app };
