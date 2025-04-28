import axios from "axios";

export const getPortfolios = async (userId: string) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/portfolio/${userId}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch portfolios");
  }
};

export const removePortfolio = async (userId: string, platform: string) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/portfolio/${userId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        data: { platform },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to remove portfolio");
  }
};

export const connectPortfolio = async (userId: string, portfolioData: any) => {
  try {
    const response = await axios.post(
      `http://localhost:3000/portfolio/${userId}`,
      portfolioData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to connect portfolio");
  }
};
