import { useEffect, useState } from "react";
import { logout } from "../../utils/api/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

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
  }, [fetchUser]);

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
    <div>
      <h1>Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
