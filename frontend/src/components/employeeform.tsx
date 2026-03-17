import { useState } from 'react';

interface Employee {
  firstName: string;
}
interface Department {
  name: string;
  employees: Employee[];
}

function AddEmployeeForm({
  departments,
  addEmployee
}: {
  departments: Department[];
  addEmployee: (deptName: string, employee: Employee) => void;
}) {
  const [firstName, setFirstName] = useState('');
  const [department, setDepartment] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (firstName.trim().length < 3) {
      setError('First name must be at least 3 characters.');
      return;
    }
    if (!department) {
      setError('Please select a department.');
      return;
    }
    addEmployee(department, { firstName: firstName.trim() });
    setFirstName('');
    setDepartment('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Employee</h3>
      {error && <div>{error}</div>}
      <div>
        <label>
          First Name:
          <input
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            required
            minLength={3}
          />
        </label>
      </div>
      <div>
        <label>
          Department:
          <select
            value={department}
            onChange={e => setDepartment(e.target.value)}
            required
          >
            <option value="">--Select--</option>
            {departments.map(dept => (
              <option key={dept.name} value={dept.name}>{dept.name}</option>
            ))}
          </select>
        </label>
      </div>
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default AddEmployeeForm;