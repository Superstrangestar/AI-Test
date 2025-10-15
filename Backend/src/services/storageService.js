import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_FILE = path.join(__dirname, '../../data/logs.json');

// Ensure data directory and file exist
const ensureDataFile = () => {
  const dataDir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
  }
};

export const storageService = {
  // Read all logs
  getLogs: () => {
    ensureDataFile();
    try {
      const data = fs.readFileSync(DATA_FILE, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Error reading logs:', error);
      return [];
    }
  },

  // Save a new log
  saveLog: (log) => {
    ensureDataFile();
    try {
      const logs = storageService.getLogs();
      const newLog = {
        id: Date.now().toString(),
        ...log,
        timestamp: new Date().toISOString()
      };
      logs.unshift(newLog); // Add to beginning
      fs.writeFileSync(DATA_FILE, JSON.stringify(logs, null, 2));
      return newLog;
    } catch (error) {
      console.error('Error saving log:', error);
      throw error;
    }
  },

  // Clear all logs
  clearLogs: () => {
    ensureDataFile();
    try {
      fs.writeFileSync(DATA_FILE, JSON.stringify([]));
      return true;
    } catch (error) {
      console.error('Error clearing logs:', error);
      throw error;
    }
  },

  // Get log by ID
  getLogById: (id) => {
    const logs = storageService.getLogs();
    return logs.find(log => log.id === id);
  }
};