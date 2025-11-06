import axios from 'axios';
import type { GenerateResponse } from '../types/api';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const searchDocuments = async (query: string): Promise<GenerateResponse> => {
  try {
    const response = await api.post<GenerateResponse>('/api/generate', { query });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to search documents');
    }
    throw new Error('Network error occurred');
  }
};

export default api;