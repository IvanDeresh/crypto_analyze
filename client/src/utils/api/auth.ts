import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export async function login(email: string, password: string) {
  try {
    const { data } = await axios.post(
      `${API_URL}/auth/login`,
      {
        email,
        password,
      },
      { withCredentials: true }
    );
    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
}

export async function register(name: string, email: string, password: string) {
  try {
    const { data } = await axios.post(
      `${API_URL}/auth/register`,
      {
        name,
        email,
        password,
      },
      { withCredentials: true }
    );
    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Registration failed");
  }
}

export async function getCurrentUser() {
  try {
    const { data } = await axios.get(`${API_URL}/auth/me`, {
      withCredentials: true,
    });
    console.log("Current user data:", data);
    return data;
  } catch (error: any) {
    console.error("Error fetching current user:", error);
    throw new Error(error.response?.data?.message || "Not authenticated");
  }
}

export async function logout() {
  try {
    const { data } = await axios.post(
      `${API_URL}/auth/logout`,
      {},
      { withCredentials: true }
    );
    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Logout failed");
  }
}
