import express from 'express';
import playersRouter from './routes/playersRoutes';

const app = express();

// Global middleware
app.use(express.json());

// Routes
app.use('/players', playersRouter);

export default app;