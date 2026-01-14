import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import type { Request, Response } from 'express';//verbatimModuleSyntax
const app = express();
const PORT = 3001; // Usamos 3001 (frontend 3000)

// Middlewares
app.use(cors()); 
app.use(bodyParser.json());

// 🌟 Endpoint de Saludo 🌟
// Espera un POST body: { name: "Usuario" }
app.post('/api/saludo', (req: Request, res: Response) => {
    // Definimos el tipo esperado para el body (opcional, pero buena práctica)
    interface SaludoBody {
        name: string;
    }
    const { name } = req.body as SaludoBody;

    if (!name) {
        return res.status(400).json({ 
            message: "Error: Falta el parámetro 'name' en el cuerpo de la solicitud." 
        });
    }

    // Lógica de respuesta de la API
    const greetingMessage = `¡Hola, ${name}! Te saluda el backend de API_SALUDOS (Puerto ${PORT}).`;
    
    // Devolver el dato en el formato que el frontend espera
    res.status(200).json({ 
        message: greetingMessage 
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`🚀 API de Saludos corriendo en: http://localhost:${PORT}`);
});