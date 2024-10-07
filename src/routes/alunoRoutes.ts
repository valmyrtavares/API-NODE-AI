import { Router } from 'express';
import AlunoController from '../controllers/AlunoController';

const router = Router();

router.get('/', AlunoController.listAll);
router.get('/:id', AlunoController.getOneById);
router.post('/', AlunoController.createAluno);
router.put('/:id', AlunoController.updateAluno);
router.delete('/:id', AlunoController.deleteAluno);

export default router;
