import { Router } from 'express';
import ProfessorController from '../controllers/ProfessorController';

const router = Router();

router.get('/', ProfessorController.listAll);
router.get('/:id', ProfessorController.getOneById);
router.post('/', ProfessorController.createProfessor);
router.put('/:id', ProfessorController.updateProfessor);
router.delete('/:id', ProfessorController.deleteProfessor);

export default router;
