import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/auth/AuthLayout';
import RoleSelector from '../../components/auth/RoleSelector';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('patient');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Store mock user data
    localStorage.setItem('user', JSON.stringify({
      name: 'John Doe',
      email,
      role,
      // Mock data based on role
      ...(role === 'doctor' && {
        specialty: 'Cardiology',
        license_number: 'MD12345',
        experience_years: 10
      }),
      ...(role === 'patient' && {
        date_of_birth: '1990-01-01',
        gender: 'male',
        insurance_number: 'INS123456'
      })
    }));
    
    // Redirect based on role
    const redirectMap = {
      admin: '/admin',
      doctor: '/doctor',
      patient: '/patient'
    };
    navigate(redirectMap[role as keyof typeof redirectMap]);
  };

  return (
    <AuthLayout
      title="Sign in to your account"
      description="Welcome back! Please enter your details."
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            placeholder="Enter your password"
            required
          />
        </div>

        <RoleSelector
          value={role}
          onChange={setRole}
          showAdminDoctor={true}
        />

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Sign in
          </button>
        </div>

        <p className="text-center text-sm text-gray-600">
          New patient?{' '}
          <a href="/register" className="font-semibold text-blue-600 hover:text-blue-500">
            Create an account
          </a>
        </p>
      </form>
    </AuthLayout>
  );
}