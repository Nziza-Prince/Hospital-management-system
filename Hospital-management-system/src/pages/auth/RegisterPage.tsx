import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/auth/AuthLayout';
import { RegisterFormData, registerSchema } from '../../types/Auth';

export default function RegisterPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      role: 'patient',
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    // Mock registration - store user data and navigate
    localStorage.setItem('user', JSON.stringify({
      name: data.name,
      email: data.email,
      role: 'patient',
      date_of_birth: data.date_of_birth,
      gender: data.gender,
      insurance_number: data.insurance_number
    }));
    
    navigate('/patient');
  };

  return (
    <AuthLayout
      title="Create a patient account"
      description="Join us to access our healthcare services."
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full name
          </label>
          <input
            id="name"
            type="text"
            {...register('name')}
            className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="date_of_birth" className="block text-sm font-medium text-gray-700">
            Date of Birth
          </label>
          <input
            id="date_of_birth"
            type="date"
            {...register('date_of_birth')}
            className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
          {errors.date_of_birth && (
            <p className="text-sm text-red-600">{errors.date_of_birth.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
            Gender
          </label>
          <select
            id="gender"
            {...register('gender')}
            className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <p className="text-sm text-red-600">{errors.gender.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="insurance_number" className="block text-sm font-medium text-gray-700">
            Insurance Number
          </label>
          <input
            id="insurance_number"
            type="text"
            {...register('insurance_number')}
            className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            placeholder="Enter your insurance number"
          />
          {errors.insurance_number && (
            <p className="text-sm text-red-600">{errors.insurance_number.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register('password')}
            className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            placeholder="Create a password"
          />
          {errors.password && (
            <p className="text-sm text-red-600">{errors.password.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            Confirm password
          </label>
          <input
            id="confirmPassword"
            type="password"
            {...register('confirmPassword')}
            className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && (
            <p className="text-sm text-red-600">{errors.confirmPassword.message}</p>
          )}
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? 'Creating account...' : 'Create account'}
          </button>
        </div>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-blue-600 hover:text-blue-500">
            Sign in
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}