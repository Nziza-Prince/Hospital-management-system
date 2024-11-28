interface RoleSelectorProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  showAdminDoctor?: boolean;
}

export default function RoleSelector({ value, onChange, error, showAdminDoctor = false }: RoleSelectorProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">I am a</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
      >
        {showAdminDoctor && (
          <>
            <option value="admin">Administrator</option>
            <option value="doctor">Doctor</option>
          </>
        )}
        <option value="patient">Patient</option>
      </select>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}