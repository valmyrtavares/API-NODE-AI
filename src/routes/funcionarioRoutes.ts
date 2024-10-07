import { Router } from 'express';
import FuncionarioController from '../controllers/FuncionarioController';

const router = Router();

router.get('/', FuncionarioController.listAll);
router.get('/:id', FuncionarioController.getOneById);
router.post('/', FuncionarioController.createFuncionario);
router.put('/:id', FuncionarioController.updateFuncionario);
router.delete('/:id', FuncionarioController.deleteFuncionario);

export default router;
