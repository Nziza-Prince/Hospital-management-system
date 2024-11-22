import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import DashboardLayout from './components/dashboard/DashboardLayout';
import AdminDashboard from './pages/dashboard/admin/AdminDashboard';

// Temporary user data for demonstration
const adminUser = {
  name: 'John Doe',
  role: 'Administrator',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* Admin Routes */}
        <Route
          path="/admin"
          element={<DashboardLayout role="admin" user={adminUser} />}
        >
          <Route index element={<AdminDashboard />} />
          {/* Add other admin routes here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;