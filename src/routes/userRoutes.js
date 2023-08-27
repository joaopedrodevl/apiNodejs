import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';
import adminRequired from '../middlewares/adminRequired';

const router = new Router();

// Não deveria existir
router.get('/', adminRequired, userController.index); // Lista usuários
router.get('/:id', adminRequired, userController.show); // Mostra usuário

router.post('/', loginRequired, userController.store); // Cria usuário
router.put('/', loginRequired, userController.update); // Atualiza usuário
router.delete('/', loginRequired, userController.delete); // Deleta usuário

export default router;

/*
 *index -> lista todos os usuários -> GET
 *store/create -> cria um novo usuário -> POST
 *delete -> apaga um usuário -> DELETE
 *show -> mostra um usuário -> GET
 *update -> atualiza um usuário -> PATCH ou PUT
*/
