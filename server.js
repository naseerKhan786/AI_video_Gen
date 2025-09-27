import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import generateVideo from "./generateVideo.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// POST /generate-video
app.post("/generate-video", async (req, res, next) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: "Missing prompt" });

    const videoUrl = await generateVideo(prompt);
    res.json({ videoUrl });
  } catch (err) {
    next(err);
  }
});

app.get("/health", (req, res) => res.json({ status: "OK" }));

app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(port, () => {
  console.log(`🚀 Video AI Generator running at http://localhost:${port}/`);
});
/**
 * AI Video Generator
 * Original code by: LohiyaH
 * Modified by: Your Name (if you made changes)
 *
 * Backend: Node.js + Express
 * Frontend: React + Tailwind CSS
 */
