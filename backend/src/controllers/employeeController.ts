import { Request, Response } from 'express';
import { employeeService } from '../services/employeeService';

const service = employeeService();

export const employeeController = {
  getDepartments: (req: Request, res: Response) => {
    res.json(service.getDepartments());
  },
  addEmployee: (req: Request, res: Response) => {
    const { deptName, employee } = req.body;
    const result = service.addEmployee(deptName, employee);
    if (result.success) res.status(201).json(result);
    else res.status(400).json(result);
  }
};