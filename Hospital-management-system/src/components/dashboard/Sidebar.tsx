import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  FileText, 
  Settings,
  Building2,
  MessageSquare,
  Activity,
  type LucideIcon
} from 'lucide-react';

interface SidebarLink {
  name: string;
  href: string;
  icon: LucideIcon;
}

const adminLinks: SidebarLink[] = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Doctors', href: '/admin/doctors', icon: Users },
  { name: 'Patients', href: '/admin/patients', icon: Users },
  { name: 'Appointments', href: '/admin/appointments', icon: Calendar },
  { name: 'Departments', href: '/admin/departments', icon: Building2 },
  { name: 'Reports', href: '/admin/reports', icon: FileText },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

const doctorLinks: SidebarLink[] = [
  { name: 'Dashboard', href: '/doctor', icon: LayoutDashboard },
  { name: 'My Patients', href: '/doctor/patients', icon: Users },
  { name: 'Appointments', href: '/doctor/appointments', icon: Calendar },
  { name: 'Medical Records', href: '/doctor/records', icon: FileText },
  { name: 'Messages', href: '/doctor/messages', icon: MessageSquare },
  { name: 'Settings', href: '/doctor/settings', icon: Settings },
];

const patientLinks: SidebarLink[] = [
  { name: 'Dashboard', href: '/patient', icon: LayoutDashboard },
  { name: 'Appointments', href: '/patient/appointments', icon: Calendar },
  { name: 'Medical History', href: '/patient/history', icon: Activity },
  { name: 'Messages', href: '/patient/messages', icon: MessageSquare },
  { name: 'Settings', href: '/patient/settings', icon: Settings },
];

interface SidebarProps {
  role: 'admin' | 'doctor' | 'patient';
}

export default function Sidebar({ role }: SidebarProps) {
  const location = useLocation();
  const links = role === 'admin' ? adminLinks : role === 'doctor' ? doctorLinks : patientLinks;

  return (
    <div className="flex h-full w-64 flex-col bg-white border-r border-gray-200">
      <div className="flex h-16 shrink-0 items-center px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-blue-600">MedCare</span>
        </Link>
      </div>
      <nav className="flex-1 space-y-1 px-4 py-4">
        {links.map((link) => {
          const isActive = location.pathname === link.href;
          return (
            <Link
              key={link.name}
              to={link.href}
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                isActive
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
              }`}
            >
              <link.icon className={`h-5 w-5 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
              {link.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}