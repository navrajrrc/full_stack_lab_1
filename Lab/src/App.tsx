import { useState } from 'react';
import EmployeeDirectory from './components/employee';
import AddEmployeeForm from './components/employeeform';
import { initialDepartments } from './employeeData';
import type { Department, Employee } from './employeeData';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import OrganizationPage from './components/organizationPage';

function App() {
  const [departments, setDepartments] = useState<Department[]>(initialDepartments);

  function addEmployee(deptName: string, employee: Employee) {
    setDepartments(prev =>
      prev.map(dept =>
        dept.name === deptName
          ? { ...dept, employees: [...dept.employees, employee] }
          : dept
      )
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/employees" />} />
          <Route
            path="employees"
            element={
              <>
                <EmployeeDirectory departments={departments} />
                <AddEmployeeForm departments={departments} addEmployee={addEmployee} />
              </>
            }
          />
          <Route path="organization" element={<OrganizationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;