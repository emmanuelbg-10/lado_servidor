import express from "express";

const app = express();

app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hola desde Vercel Serverless API" });
});

export default app;
