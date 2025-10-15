import { aiService } from '../services/aiService.js';
import { storageService } from '../services/storageService.js';

export const logController = {
  // Process a task through AI
  processTask: async (req, res) => {
    try {
      const { task } = req.body;

      if (!task || typeof task !== 'string') {
        return res.status(400).json({
          error: 'Task is required and must be a string',
        });
      }

      const aiResponse = await aiService.processTask(task);

      const savedLog = storageService.saveLog(aiResponse);

      res.json(aiResponse);
    } catch (error) {
      console.error('Error processing task:', error);
      res.status(500).json({
        error: 'Failed to process task',
      });
    }
  },

  // Get all logs
  getLogs: (req, res) => {
    try {
      const logs = storageService.getLogs();
      res.json(logs);
    } catch (error) {
      console.error('Error getting logs:', error);
      res.status(500).json({
        error: 'Failed to retrieve logs',
      });
    }
  },

  // Save a log entry
  saveLog: (req, res) => {
    try {
      const { task, status, result, timestamp } = req.body;

      if (!task || !status || !result) {
        return res.status(400).json({
          error: 'Task, status, and result are required',
        });
      }

      const log = storageService.saveLog({
        task,
        status,
        result,
        timestamp: timestamp || new Date().toISOString(),
      });

      res.status(201).json(log);
    } catch (error) {
      console.error('Error saving log:', error);
      res.status(500).json({
        error: 'Failed to save log',
      });
    }
  },

  // Clear all logs
  clearLogs: (req, res) => {
    try {
      storageService.clearLogs();
      res.json({ message: 'All logs cleared successfully' });
    } catch (error) {
      console.error('Error clearing logs:', error);
      res.status(500).json({
        error: 'Failed to clear logs',
      });
    }
  },

  // Get log by ID
  getLogById: (req, res) => {
    try {
      const { id } = req.params;
      const log = storageService.getLogById(id);

      if (!log) {
        return res.status(404).json({
          error: 'Log not found',
        });
      }

      res.json(log);
    } catch (error) {
      console.error('Error getting log:', error);
      res.status(500).json({
        error: 'Failed to retrieve log',
      });
    }
  },
};
