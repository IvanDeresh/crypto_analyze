import { useEffect, useState } from "react";
import { logout } from "../../utils/api/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Button from "../../components/shared/Button";

const Profile = () => {
  const { user, setUser, fetchUser } = useAuth();
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
    <div className="flex flex-col items-center p-8 gap-8">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-900 p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Welcome, {user.name}</h1>
          <p className="text-gray-600">Email: {user.email}</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
          <Button
            onClick={handleLogout}
            label="Logout"
            styles="px-6 py-3 cursor-pointer bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
          />
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
