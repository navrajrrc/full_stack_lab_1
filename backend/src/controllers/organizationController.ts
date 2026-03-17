import { Request, Response } from 'express';
import { organizationService } from '../services/organizationService';

const service = organizationService();

export const organizationController = {
  getRoles: (req: Request, res: Response) => {
    res.json(service.getRoles());
  },
  addRole: (req: Request, res: Response) => {
    const role = req.body;
    const result = service.addRole(role);
    if (result.success) res.status(201).json(result);
    else res.status(400).json(result);
  }
};