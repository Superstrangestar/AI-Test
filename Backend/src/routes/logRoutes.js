import express from 'express';
import { logController } from '../controllers/logController.js';

export const router = express.Router();

// Process a task
router.post('/process', logController.processTask);

// Log management
router.get('/logs', logController.getLogs);
router.post('/logs', logController.saveLog);
router.delete('/logs', logController.clearLogs);
router.get('/logs/:id', logController.getLogById);
