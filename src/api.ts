import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import type { Request, Response } from 'express';//verbatimModuleSyntax
const app = express();

// 1. IMPORTANTE: CORS debe permitir el origen de Power Apps
app.use(cors()); 

// 2. VITAL: Sin esto, el POST siempre dirá "Cannot POST" o dará error 400
app.use(express.json()); 

app.get("/", (req, res) => {
  res.send("¡El servidor está vivo y listo para Power Apps!");
});

app.post("/", (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hola ${name}, bienvenido a la API de saludos!` });
});

const PORT = Number(process.env.PORT) || 10000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});
// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`🚀 API de Saludos corriendo en: http://localhost:${PORT}`);
});