import "./App.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AdminPanel from "./AdminPanel/AdminPanelHome/AdminPanel";
import Profile from "./AdminPanel/LoginProfile/Profile";
import ProtectedRoute from "./AdminPanel/LoginProfile/ProtectedRoute";
import { useSelector } from "react-redux";

export default function App() {
  const isAuthenticated = useSelector((state) => state.states.isAuthenticated);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<Profile />} />
      <Route
        path="/adminpanel/*"
        element={
          isAuthenticated ? (
            <ProtectedRoute>
              <AdminPanel />
            </ProtectedRoute>
          ) : (
            <Navigate to="/profile" replace />
          )
        }
      />
    </Routes>
  );
}
