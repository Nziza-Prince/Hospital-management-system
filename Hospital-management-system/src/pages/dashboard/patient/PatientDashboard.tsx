import { Calendar, FileText, MessageSquare, Activity, Clock, Pill } from 'lucide-react';
import StatsCard from '../../../components/dashboard/StatsCard';

const upcomingAppointments = [
  { id: 1, doctor: "Dr. Sarah Smith", specialty: "Cardiologist", date: "Mar 15, 2024", time: "10:00 AM" },
  { id: 2, doctor: "Dr. Michael Chen", specialty: "Neurologist", date: "Mar 22, 2024", time: "02:30 PM" },
];

const medications = [
  { id: 1, name: "Amoxicillin", dosage: "500mg", frequency: "3 times daily", remaining: 5 },
  { id: 2, name: "Lisinopril", dosage: "10mg", frequency: "Once daily", remaining: 10 },
  { id: 3, name: "Metformin", dosage: "850mg", frequency: "2 times daily", remaining: 15 },
];

export default function PatientDashboard() {
  const stats = [
    {
      title: 'Next Appointment',
      value: 'Mar 15',
      icon: Calendar,
    },
    {
      title: 'Active Prescriptions',
      value: '3',
      icon: Pill,
    },
    {
      title: 'Unread Messages',
      value: '2',
      icon: MessageSquare,
    },
    {
      title: 'Health Score',
      value: '85%',
      icon: Activity,
      trend: { value: 5, label: 'vs last check' },
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl">
          Patient Dashboard
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Welcome back, {JSON.parse(localStorage.getItem('user') || '{}').name}
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
            Upcoming Appointments
            <span className="text-sm text-blue-600 cursor-pointer hover:text-blue-800">Schedule New</span>
          </h3>
          <div className="mt-6 flow-root">
            <ul className="divide-y divide-gray-200">
              {upcomingAppointments.map((appointment) => (
                <li key={appointment.id} className="py-4">
                  <div className="flex items-center space-x-4">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{appointment.doctor}</p>
                      <p className="text-sm text-gray-500">{appointment.specialty}</p>
                      <p className="text-xs text-gray-400 mt-1">
                        {appointment.date} at {appointment.time}
                      </p>
                    </div>
                    <button className="text-sm text-blue-600 hover:text-blue-800">
                      Reschedule
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="text-lg font-medium text-gray-900 flex items-center justify-between">
            Current Medications
            <span className="text-sm text-blue-600 cursor-pointer hover:text-blue-800">View All</span>
          </h3>
          <div className="mt-6 flow-root">
            <ul className="divide-y divide-gray-200">
              {medications.map((medication) => (
                <li key={medication.id} className="py-4">
                  <div className="flex items-center space-x-4">
                    <Pill className="h-5 w-5 text-gray-400" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{medication.name}</p>
                      <p className="text-sm text-gray-500">
                        {medication.dosage} - {medication.frequency}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {medication.remaining} days remaining
                      </p>
                    </div>
                    <button className="text-sm text-blue-600 hover:text-blue-800">
                      Refill
                    </button>
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