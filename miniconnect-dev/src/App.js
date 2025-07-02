import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import Selection from './pages/selection';
import LoginUser from './pages/loginUser';
import LoginDeveloper from './pages/loginDeveloper';
import SignupUser from './pages/signupUser';
import SignupDeveloper from './pages/signupDeveloper';
import Dashboard from './pages/dashboard';
import { ThemeProvider } from './context/themeContext';
import ProtectedRoute from './components/protectedRoute';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/selection" element={<Selection />} />
          <Route path="/login/user" element={<LoginUser />} />
          <Route path="/login/developer" element={<LoginDeveloper />} />
          <Route path="/signup/user" element={<SignupUser />} />
          <Route path="/signup/developer" element={<SignupDeveloper />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;