import { Router } from 'express';
import { organizationController } from '../controllers/organizationController';

const router = Router();

router.get('/', organizationController.getRoles);
router.post('/', organizationController.addRole);

export default router;