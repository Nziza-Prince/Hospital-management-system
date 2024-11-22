import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

interface DashboardLayoutProps {
  role: 'admin' | 'doctor' | 'patient';
  user: {
    name: string;
    role: string;
    avatar?: string;
  };
}

export default function DashboardLayout({ role, user }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      <div className={`
        fixed inset-0 z-40 lg:static lg:block
        ${sidebarOpen ? 'block' : 'hidden'}
      `}>
        <Sidebar role={role} />
      </div>

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header 
          user={user} 
          onMenuClick={() => setSidebarOpen(!sidebarOpen)} 
        />

        <main className="flex-1 overflow-y-auto bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}