export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'doctor' | 'patient';
  avatar?: string;
  date_of_birth: string,
  gender: string,
  insurance_number: string

}

export interface NavItem {
  label: string;
  href: string;
  icon?: React.ComponentType;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}