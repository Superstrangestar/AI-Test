import axios from 'axios';
import { BACKEND_BASE_URL } from '@constants';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: BACKEND_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    console.log(
      `🔄 ${config.method?.toUpperCase()} ${config.url}`,
      config.data || ''
    );
    return config;
  },
  (error) => {
    console.error('❌ Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    console.log(`✅ ${response.status} ${response.config.url}`, response.data);
    return response;
  },
  (error) => {
    const errorMessage =
      error.response?.data?.message || error.message || 'Unknown error';
    console.error('❌ Response error:', errorMessage);

    // Handle specific HTTP status codes
    if (error.response?.status === 401) {
      // Unauthorized - redirect to login or refresh token
      localStorage.removeItem('token');
      window.location.href = '/login';
    }

    return Promise.reject({
      message: errorMessage,
      status: error.response?.status,
      data: error.response?.data,
    });
  }
);

// Generic API methods
export const apiService = {
  // GET request
  get: <T>(url: string, params?: any): Promise<T> => {
    return apiClient.get(url, { params }).then((response) => response.data);
  },

  // POST request
  post: <T>(url: string, data?: any): Promise<T> => {
    return apiClient.post(url, data).then((response) => response.data);
  },

  // PUT request
  put: <T>(url: string, data?: any): Promise<T> => {
    return apiClient.put(url, data).then((response) => response.data);
  },

  // PATCH request
  patch: <T>(url: string, data?: any): Promise<T> => {
    return apiClient.patch(url, data).then((response) => response.data);
  },

  // DELETE request
  delete: <T>(url: string): Promise<T> => {
    return apiClient.delete(url).then((response) => response.data);
  },

  // Upload files
  upload: <T>(url: string, formData: FormData): Promise<T> => {
    return apiClient
      .post(url, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((response) => response.data);
  },
};

// Types for common responses
export { type ApiResponse } from './types';
