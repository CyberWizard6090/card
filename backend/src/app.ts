import express from 'express';
import cors from 'cors';
import cardRoutes from 'routes/cardRoutes';

const app = express();



// Middleware для настройки CORS
app.use(
    cors({
      origin: ['http://127.0.0.1:3000', 'http://localhost:3000'], 
      methods: ['GET', 'POST','DELETE'], 
      allowedHeaders: ['Content-Type'], 
    })
  );
  app.options('*', cors());

// Middleware для обработки JSON
app.use(express.json());

  // Роуты
app.use('/api', cardRoutes);
export default app;
