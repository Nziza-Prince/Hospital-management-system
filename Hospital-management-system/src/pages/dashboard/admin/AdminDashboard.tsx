import { Users, Calendar, Building2, Activity } from 'lucide-react';
import StatsCard from '../../../components/dashboard/StatsCard';

export default function AdminDashboard() {
  const stats = [
    {
      title: 'Total Patients',
      value: '2,543',
      icon: Users,
      trend: { value: 12, label: 'vs last month' },
    },
    {
      title: 'Active Doctors',
      value: '48',
      icon: Users,
      trend: { value: 2, label: 'vs last month' },
    },
    {
      title: 'Appointments Today',
      value: '156',
      icon: Calendar,
      trend: { value: -5, label: 'vs yesterday' },
    },
    {
      title: 'Departments',
      value: '12',
      icon: Building2,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl">
          Dashboard Overview
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Monitor hospital performance and key metrics
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="rounded-lg bg-white shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Recent Activity
            </h3>
            <div className="mt-4">
              <Activity className="h-64 w-full text-gray-200" />
              <p className="text-center text-sm text-gray-500">Activity chart coming soon</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Department Performance
            </h3>
            <div className="mt-4">
              <Activity className="h-64 w-full text-gray-200" />
              <p className="text-center text-sm text-gray-500">Performance chart coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}