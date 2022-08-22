import * as React from "react";
import Dashboard from "./Components/Dashboard";
import ProjectDetails from "./Components/ProjectDetails";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LogIn from "./Components/LogIn";
import Profile from "./Components/Profile/Profile";
import OthersProfile from "./Components/Profile/OthersProfile";
export default function App() {
  const ProtectedRoute = (props) => {
    const token = localStorage.getItem("token");
    const hasLoggedIn = token ? true : false;
    if (hasLoggedIn) return props.children;
    return <Navigate to="/LogIn" />;
  };

  const UnProtectedRoute = (props) => {
    const token = localStorage.getItem("token");
    const userType = localStorage.getItem("userType");
    const hasLoggedIn = token ? true : false;
    if (hasLoggedIn) return <Navigate to="/Dashboard" />;
    return props.children;
  };
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <UnProtectedRoute>
                <LogIn />
              </UnProtectedRoute>
            }
          />
          <Route
            path="/LogIn"
            element={
              <UnProtectedRoute>
                <LogIn />
              </UnProtectedRoute>
            }
          />
          <Route
            path="/Dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ProjectDetails/:id"
            element={
              <ProtectedRoute>
                <ProjectDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/MyProfile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/OthersProfile/:id"
            element={
              <ProtectedRoute>
                <OthersProfile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}
