import { useAuth } from "../../context/AuthContext";
import { User, Portfolio } from "../../types/props";
import { removePortfolio } from "../../utils/api/portfolio";
import Chart from "../../components/Chart";

const Stats = () => {
  const { user, fetchUser } = useAuth() as {
    user: User | null;
    setUser: (user: User | null) => void;
    fetchUser: () => Promise<void>;
  };

  async function handleDeletePortfolio(userId: string, platform: string) {
    try {
      await removePortfolio(userId, platform);
      await fetchUser();
    } catch (error) {
      alert("Failed to remove portfolio");
    }
  }

  if (user) {
    return (
      <div className="w-full h-auto p-6">
        <div className="mb-8">
          <Chart user={user} />
        </div>

        <div className="bg-gray-900 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Your Portfolios
          </h2>
          {user.portfolios.length === 0 ? (
            <p className="text-gray-400">No portfolios connected yet.</p>
          ) : (
            <ul>
              {user.portfolios.map((portfolio: Portfolio) => (
                <li
                  key={portfolio.platform}
                  className="flex justify-between items-center bg-gray-800 p-4 rounded-md shadow mb-4"
                >
                  <div>
                    <h3 className="text-white font-bold">
                      {portfolio.platform.toUpperCase()}
                    </h3>
                    <p className="text-gray-400">
                      <span className="font-semibold text-white">Account:</span>{" "}
                      {portfolio.accountName}
                    </p>
                    <p className="text-gray-400">
                      <span className="font-semibold text-white">
                        Connected:
                      </span>{" "}
                      {new Date(portfolio.connectedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      handleDeletePortfolio(user._id, portfolio.platform)
                    }
                    className="text-red-500 cursor-pointer hover:text-red-700 font-semibold"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }

  return null;
};

export default Stats;
