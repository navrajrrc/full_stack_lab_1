import type { Employee } from './employeeData';
import { employeeRepo } from './employeeRepo';

export function employeeService() {
  function addEmployee(deptName: string, employee: Employee) {
    if (!deptName) {
      return { success: false, error: "Department is required." };
    }
    if (!employee.firstName || employee.firstName.trim().length < 3) {
      return { success: false, error: "First name must be at least 3 characters." };
    }
    const success = employeeRepo.createEmployee(deptName, employee);
    if (!success) {
      return { success: false, error: "Department does not exist." };
    }
    return { success: true };
  }

  function getDepartments() {
    return employeeRepo.getDepartments();
  }

  return { addEmployee, getDepartments };
}