export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'doctor' | 'patient';
  avatar?: string;
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