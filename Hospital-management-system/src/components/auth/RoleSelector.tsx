interface RoleSelectorProps {
    value: string;
    onChange: (value: string) => void;
    error?: string;
  }
  
  export default function RoleSelector({ value, onChange, error }: RoleSelectorProps) {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700">I am a</label>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
          <option value="admin">Administrator</option>
        </select>
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    );
  }