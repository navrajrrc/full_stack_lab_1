import { initialDepartments, Department, Employee } from '../data/employeeData';

let departments: Department[] = JSON.parse(JSON.stringify(initialDepartments));

export const employeeRepo = {
  getDepartments(): Department[] {
    return departments;
  },
  createEmployee(deptName: string, employee: Employee): boolean {
    const dept = departments.find(d => d.name === deptName);
    if (!dept) return false;
    dept.employees.push(employee);
    return true;
  }
};