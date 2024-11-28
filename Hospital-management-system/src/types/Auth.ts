import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
  role: z.enum(['admin', 'doctor', 'patient'])
});

export const registerSchema = z
  .object({
    user_name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string(),
    role: z.enum(['admin', 'doctor', 'patient']),
    date_of_birth: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: 'Invalid date of birth',
    }),
    gender: z.enum(['male', 'female', 'other'], {
      required_error: 'Gender is required',
    }),
    insurance_number: z.string().min(1, 'Insurance number is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });


export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;