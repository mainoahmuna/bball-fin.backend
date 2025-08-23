import express from 'express';
import playerRouter from './routes/playerRoutes';
import { errorHandler } from './middleware/error';

const app = express();

// Global middleware
app.use(express.json());

// Routes
app.use('/players', playerRouter);

// Global error handler (should be after all routes)
app.use(errorHandler);

export default app;