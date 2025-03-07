import express from "express";
import fs from "fs";
import path from "path";

const app = express();
app.use(express.json());

// Ruta que devuelve los productos desde el archivo JSON
app.get("/api/products", (req, res) => {
  const filePath = path.join(__dirname, "products.json");

  // Leer el archivo de productos
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error al cargar los productos" });
    }

    // Responder con los datos del archivo JSON
    res.json(JSON.parse(data));
  });
});

export default app;
