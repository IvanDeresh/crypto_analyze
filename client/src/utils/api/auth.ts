import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export async function login(email: string, password: string) {
  try {
    const { data } = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });
    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
}

export async function register(name: string, email: string, password: string) {
  try {
    const { data } = await axios.post(`${API_URL}/auth/register`, {
      name,
      email,
      password,
    });
    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Registration failed");
  }
}
