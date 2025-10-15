import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const apiService = {
  async processTask(task) {
    const response = await apiClient.post('/process', { task });
    return response.data;
  },

  async getLogs() {
    const response = await apiClient.get('/logs');
    return response.data;
  },

  async clearLogs() {
    const response = await apiClient.delete('/logs');
    return response.data;
  },

  async getLogById(id) {
    const response = await apiClient.get(`/logs/${id}`);
    return response.data;
  }
};