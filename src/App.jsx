import "./App.scss";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AdminPanel from "./AdminPanel/AdminPanelHome/AdminPanel";
import Profile from "./AdminPanel/LoginProfile/Profile";
import ProtectedRoute from "./AdminPanel/LoginProfile/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<Profile />} />
      <Route
        path="/adminpanel/*"
        element={
          <ProtectedRoute>
            <AdminPanel />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
