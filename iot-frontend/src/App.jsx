import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import DeviceDetailsPage from './pages/DeviceDetailsPage';
import Header from './components/Layout/Header';
import SignUpPage from './pages/SignUpPage';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* صفحات غير مسموح الوصول لها لو فيه توكن */}
        <Route
          path="/login" element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/signup" element={
            <PublicRoute>
              <SignUpPage />
            </PublicRoute>
          }
        />

        {/* الصفحات المحمية */}
        <Route
          path="/" element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/device/:id" element={
            <ProtectedRoute>
              <DeviceDetailsPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
