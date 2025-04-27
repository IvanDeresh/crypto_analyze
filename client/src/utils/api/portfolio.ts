export const getPortfolios = async (userId: string) => {
  const response = await fetch(`http://localhost/3000/portfolio/${userId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch portfolios");
  }
  return await response.json();
};

export const removePortfolio = async (userId: string, platform: string) => {
  const response = await fetch(`http://localhost/3000/portfolio/${userId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ platform }),
  });
  if (!response.ok) {
    throw new Error("Failed to remove portfolio");
  }
  return await response.json();
};
export const connectPortfolio = async (userId: string, portfolioData: any) => {
  const response = await fetch(`http://localhost:3000/portfolio/${userId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(portfolioData),
  });

  if (!response.ok) {
    throw new Error("Failed to connect portfolio");
  }

  return await response.json();
};
