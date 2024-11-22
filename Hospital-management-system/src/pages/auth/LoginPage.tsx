import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthLayout from '../../components/auth/AuthLayout';
import RoleSelector from '../../components/auth/RoleSelector';
import { LoginFormData, loginSchema } from '../../types/auth';

export default function LoginPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      role: 'patient',
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', data);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      // Redirect based on role
      const redirectMap = {
        admin: '/admin',
        doctor: '/doctor',
        patient: '/patient'
      };
      navigate(redirectMap[data.role]);
    } catch (error) {
      setError('root', {
        message: 'Invalid credentials. Please try again.'
      });
    }
  };

  return (
    <AuthLayout
      title="Sign in to your account"
      description="Welcome back! Please enter your details."
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register('password')}
            className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>
          )}
        </div>

        <RoleSelector
          value={register('role').value}
          onChange={(value) => setValue('role', value as 'admin' | 'doctor' | 'patient')}
          error={errors.role?.message}
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <Link to="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
              Forgot your password?
            </Link>
          </div>
        </div>

        {errors.root && (
          <div className="rounded-md bg-red-50 p-4">
            <p className="text-sm text-red-600">{errors.root.message}</p>
          </div>
        )}

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full justify-center rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Signing in...' : 'Sign in'}
          </button>
        </div>

        <p className="text-center text-sm text-gray-600">
          Not a member?{' '}
          <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
            Register now
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}