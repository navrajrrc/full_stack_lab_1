import { useState } from 'react';
import EmployeeDirectory from './components/employee';
import AddEmployeeForm from './components/employeeform';
import { employeeService } from './employeeService';

function App() {
  const service = employeeService();
  const [departments, setDepartments] = useState(service.getDepartments());

  function refreshDepartments() {
    setDepartments(service.getDepartments());
  }

  return (
    <>
      <EmployeeDirectory departments={departments} />
      <AddEmployeeForm departments={departments} onEmployeeAdded={refreshDepartments} />
    </>
  );
}

export default App;