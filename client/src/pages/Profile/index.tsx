import { useEffect, useState } from "react";
import { logout } from "../../utils/api/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Button from "../../components/shared/Button";
import { User } from "../../types/props";

const Profile = () => {
  const { user, setUser, fetchUser } = useAuth() as {
    user: User | null;
    setUser: (user: User | null) => void;
    fetchUser: () => Promise<void>;
  };
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      try {
        await fetchUser();
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      navigate("/sign-in");
    } catch (error) {
      console.error("Logout failed");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not logged in</div>;

  return (
    <div className="flex flex-col min-h-screen h-auto items-center p-8 gap-8">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-900 p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Welcome, {user.name}</h1>
          <p className="text-gray-600">Email: {user.email}</p>
          <Button
            onClick={handleLogout}
            label="Logout"
            styles="px-6 py-3 cursor-pointer bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
          />
        </div>

        <div className="bg-gray-900 p-6 rounded-lg overflow-y-scroll max-h-screen shadow-md flex flex-col gap-8 items-center">
          {user.portfolios.length === 0 ? (
            <p className="text-gray-400">No portfolios connected yet.</p>
          ) : (
            user.portfolios.map((portfolio, index: number) => (
              <div
                key={index}
                className="bg-gray-800 w-[80%] p-4 rounded-md shadow flex flex-col gap-2"
              >
                <h3 className="text-lg font-bold text-white capitalize">
                  {portfolio.platform} Connection
                </h3>
                <p className="text-gray-400">
                  <span className="font-semibold text-white">Account:</span>{" "}
                  {portfolio.accountName}
                </p>
                <p className="text-gray-400">
                  <span className="font-semibold text-white">Connected:</span>{" "}
                  {new Date(portfolio.connectedAt).toLocaleDateString()}
                </p>
                <div className="text-gray-400">
                  <span className="font-semibold text-white">Credentials:</span>
                  <pre className="bg-gray-700 p-2 rounded mt-1 text-sm overflow-x-auto">
                    {JSON.stringify(portfolio.credentials, null, 2)}
                  </pre>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="w-full bg-gray-900 p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
        <p className="text-gray-600">
          Here you can display more information about the user or settings.
        </p>
      </div>
    </div>
  );
};

export default Profile;
