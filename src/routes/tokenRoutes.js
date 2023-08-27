import { Router } from 'express';
import tokenController from '../controllers/TokenController';
import adminTokenController from '../controllers/AdminTokenController';

const router = new Router();

router.post('/', tokenController.store);
router.post('/adminToken', adminTokenController.store);

export default router;
