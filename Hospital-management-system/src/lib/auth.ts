import api from '../utils/axios';
import { getUser, logout } from '../utils/auth';

export const authService = {
  register: async (userData: {
    user_name: string;
    email: string;
    password: string;
    role: string;
    date_of_birth: string;
    gender: string;
    insurance_number?: string;
  }) => {
    try {
      const response = await api.post('/register', userData);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  login: async (credentials: { email: string; password: string }) => {
    try {
      const response = await api.post('/auth/login', credentials);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  logout,
  getUser,
};