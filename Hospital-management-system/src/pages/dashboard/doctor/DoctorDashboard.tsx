import { Users, Calendar, MessageSquare, FileText, Clock } from 'lucide-react';
import StatsCard from '../../../components/dashboard/StatsCard';

const appointments = [
  { id: 1, patient: "Sarah Johnson", time: "09:00 AM", type: "Check-up", status: "confirmed" },
  { id: 2, patient: "Michael Brown", time: "10:30 AM", type: "Follow-up", status: "confirmed" },
  { id: 3, patient: "Emily Davis", time: "02:00 PM", type: "Consultation", status: "pending" },
  { id: 4, patient: "Robert Wilson", time: "03:30 PM", type: "Review", status: "confirmed" },
];

const patientUpdates = [
  { id: 1, patient: "James Moore", update: "Lab results available", time: "1 hour ago" },
  { id: 2, patient: "Linda Taylor", update: "Prescription renewed", time: "2 hours ago" },
  { id: 3, patient: "William Anderson", update: "Appointment rescheduled", time: "3 hours ago" },
];

export default function DoctorDashboard() {
  const stats = [
    {
      title: 'Total Patients',
      value: '124',
      icon: Users,
      trend: { value: 8, label: 'vs last month' },
    },
    {
      title: "Today's Appointments",
      value: '12',
      icon: Calendar,
      trend: { value: 2, label: 'vs yesterday' },
    },
    {
      title: 'Unread Messages',
      value: '5',
      icon: MessageSquare,
    },
    {
      title: 'Reports Pending',
      value: '3',
      icon: FileText,
      trend: { value: -2, label: 'vs yesterday' },
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl">
          Doctor Dashboard
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Welcome back, Dr. {JSON.parse(localStorage.getItem('user') || '{}').name}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="text-lg font-medium text-gray-900 flex items-center justify-between">
            Today's Appointments
            <span className="text-sm text-blue-600 cursor-pointer hover:text-blue-800">View all</span>
          </h3>
          <div className="mt-6 flow-root">
            <ul className="divide-y divide-gray-200">
              {appointments.map((appointment) => (
                <li key={appointment.id} className="py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{appointment.patient}</p>
                        <p className="text-sm text-gray-500">
                          {appointment.time} - {appointment.type}
                        </p>
                      </div>
                    </div>
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      appointment.status === 'confirmed' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {appointment.status}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="text-lg font-medium text-gray-900 flex items-center justify-between">
            Recent Patient Updates
            <span className="text-sm text-blue-600 cursor-pointer hover:text-blue-800">View all</span>
          </h3>
          <div className="mt-6 flow-root">
            <ul className="divide-y divide-gray-200">
              {patientUpdates.map((update) => (
                <li key={update.id} className="py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{update.patient}</p>
                      <p className="text-sm text-gray-500">{update.update}</p>
                      <p className="text-xs text-gray-400 mt-1">{update.time}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}