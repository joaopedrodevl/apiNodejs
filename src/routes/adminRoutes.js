import { Router } from 'express';
import adminController from '../controllers/AdminController';
import adminRequired from '../middlewares/adminRequired';

const router = new Router();

router.post('/', adminRequired, adminController.store);
router.put('/', adminRequired, adminController.update);

export default router;
