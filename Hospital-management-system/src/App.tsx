import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import DashboardLayout from './components/dashboard/DashboardLayout';
import AdminDashboard from './pages/dashboard/admin/AdminDashboard';
import DoctorDashboard from './pages/dashboard/doctor/DoctorDashboard';
import PatientDashboard from './pages/dashboard/patient/PatientDashboard';
import ProtectedRoute from './components/ProtectedRoute';

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
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <DashboardLayout role="admin" />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
        </Route>

        {/* Doctor Routes */}
        <Route
          path="/doctor"
          element={
            <ProtectedRoute allowedRoles={['doctor']}>
              <DashboardLayout role="doctor" />
            </ProtectedRoute>
          }
        >
          <Route index element={<DoctorDashboard />} />
        </Route>

        {/* Patient Routes */}
        <Route
          path="/patient"
          element={
            <ProtectedRoute allowedRoles={['patient']}>
              <DashboardLayout role="patient" />
            </ProtectedRoute>
          }
        >
          <Route index element={<PatientDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;