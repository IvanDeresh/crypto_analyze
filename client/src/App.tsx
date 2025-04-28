import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Layout from "./components/layout";
import Stats from "./pages/Stats";
import Home from "./pages/Home";
import SignUp from "./pages/Auth/SignUp";
import SignIn from "./pages/Auth/SignIn";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Connect from "./pages/Connect";
import ProtectedRoute from "./utils/helpers/protectRoute";
import { AuthProvider } from "./context/AuthContext";
import News from "./pages/News";
import Contact from "./pages/Contact";

function App() {
  return (
    <AuthProvider>
      <div className="w-full">
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="/about" element={<About />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route path="/connect" element={<Connect />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
