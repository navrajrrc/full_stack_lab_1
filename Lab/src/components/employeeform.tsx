import { useFormInput } from '../userFormInput';
import { employeeService } from '../employeeService';
import type { Department } from '../employeeData';

function AddEmployeeForm({
  departments,
  onEmployeeAdded
}: {
  departments: Department[];
  onEmployeeAdded: () => void;
}) {
  const service = employeeService();

  // Use the custom hook for each input
  const firstName = useFormInput('', value =>
    value.trim().length < 3 ? "First name must be at least 3 characters." : null
  );
  const department = useFormInput('', value =>
    !value ? "Please select a department." : null
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const isFirstNameValid = firstName.validateInput();
    const isDepartmentValid = department.validateInput();
    if (!isFirstNameValid || !isDepartmentValid) return;

    const result = service.addEmployee(department.value, { firstName: firstName.value });
    if (!result.success) {
      if (result.error?.includes("First name")) firstName.setError(result.error);
      else if (result.error?.includes("Department")) department.setError(result.error);
      return;
    }
    firstName.setValue('');
    department.setValue('');
    onEmployeeAdded(); // To refresh the list in App
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Employee</h3>
      <div>
        <label>
          First Name:
          <input value={firstName.value} onChange={firstName.onChange} />
        </label>
        {firstName.error && <div style={{ color: 'red' }}>{firstName.error}</div>}
      </div>
      <div>
        <label>
          Department:
          <select value={department.value} onChange={department.onChange}>
            <option value="">--Select--</option>
            {departments.map(dept => (
              <option key={dept.name} value={dept.name}>{dept.name}</option>
            ))}
          </select>
        </label>
        {department.error && <div style={{ color: 'red' }}>{department.error}</div>}
      </div>
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default AddEmployeeForm;