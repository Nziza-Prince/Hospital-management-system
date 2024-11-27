import { Users, Calendar, Building2, Activity, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import StatsCard from '../../../components/dashboard/StatsCard';

const recentActivities = [
  { id: 1, action: "New doctor registered", time: "2 minutes ago", status: "success" },
  { id: 2, action: "Updated hospital policy", time: "1 hour ago", status: "info" },
  { id: 3, action: "System maintenance scheduled", time: "2 hours ago", status: "warning" },
  { id: 4, action: "New department added", time: "5 hours ago", status: "success" },
];

const departmentStats = [
  { name: "Cardiology", patients: 450, trend: 12 },
  { name: "Neurology", patients: 380, trend: -5 },
  { name: "Pediatrics", patients: 520, trend: 8 },
  { name: "Orthopedics", patients: 290, trend: 15 },
];

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
      title: 'Revenue',
      value: '$45.2K',
      icon: TrendingUp,
      trend: { value: 8, label: 'vs last month' },
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl">
          Dashboard Overview
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Welcome back, Admin! Here's what's happening today.
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
            <h3 className="text-lg font-medium leading-6 text-gray-900 flex items-center justify-between">
              Recent Activity
              <span className="text-sm text-blue-600 cursor-pointer hover:text-blue-800">View all</span>
            </h3>
            <div className="mt-6 flow-root">
              <ul className="divide-y divide-gray-200">
                {recentActivities.map((activity) => (
                  <li key={activity.id} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className={`h-2.5 w-2.5 rounded-full ${
                        activity.status === 'success' ? 'bg-green-500' : 
                        activity.status === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                      }`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {activity.action}
                        </p>
                        <p className="text-sm text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900 flex items-center justify-between">
              Department Performance
              <span className="text-sm text-blue-600 cursor-pointer hover:text-blue-800">View details</span>
            </h3>
            <div className="mt-6 flow-root">
              <ul className="divide-y divide-gray-200">
                {departmentStats.map((dept) => (
                  <li key={dept.name} className="py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900">{dept.name}</h4>
                        <p className="text-sm text-gray-500">{dept.patients} patients</p>
                      </div>
                      <div className={`flex items-center ${
                        dept.trend > 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {dept.trend > 0 ? (
                          <ArrowUpRight className="h-4 w-4" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4" />
                        )}
                        <span className="ml-1 text-sm font-medium">{Math.abs(dept.trend)}%</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}