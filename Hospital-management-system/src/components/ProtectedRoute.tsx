import { Navigate } from 'react-router-dom';
import { isAuthenticated, getUser } from '../utils/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

export default function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const authenticated = isAuthenticated();
  const user = getUser();

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // Redirect to appropriate dashboard based on role
    const redirectMap = {
      admin: '/admin',
      doctor: '/doctor',
      patient: '/patient'
    };
    return <Navigate to={redirectMap[user.role as keyof typeof redirectMap]} />;
  }

  return <>{children}</>;
}