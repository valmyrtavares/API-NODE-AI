// src/controllers/ProfessorController.ts
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Professor } from '../models/Professor';

class ProfessorController {
  static listAll = async (req: Request, res: Response) => {
    const professorRepository = getRepository(Professor);
    const professores = await professorRepository.find();
    res.send(professores);
  };

  static getOneById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const professorRepository = getRepository(Professor);
    try {
      const professor = await professorRepository.findOneOrFail({ where: { id } });
      res.send(professor);
    } catch (error) {
      res.status(404).send('Professor não encontrado');
    }
  };

  static createProfessor = async (req: Request, res: Response) => {
    const { nome, disciplina, cpf, celular } = req.body;
    const professor = new Professor();
    professor.nome = nome;
    professor.disciplina = disciplina;
    professor.cpf = cpf;
    professor.celular = celular;

    const professorRepository = getRepository(Professor);
    try {
      await professorRepository.save(professor);
    } catch (e) {
      res.status(400).send('Erro ao salvar professor');
      return;
    }
    res.status(201).send('Professor criado');
  };

  static updateProfessor = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { nome, disciplina, cpf, celular } = req.body;

    const professorRepository = getRepository(Professor);
    let professor;
    try {
      professor = await professorRepository.findOneOrFail({ where: { id } });
    } catch (error) {
      res.status(404).send('Professor não encontrado');
      return;
    }

    professor.nome = nome;
    professor.disciplina = disciplina;
    professor.cpf = cpf;
    professor.celular = celular;

    try {
      await professorRepository.save(professor);
    } catch (e) {
      res.status(400).send('Erro ao atualizar professor');
      return;
    }

    res.status(204).send();
  };

  static deleteProfessor = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const professorRepository = getRepository(Professor);
    let professor: Professor;
    try {
      professor = await professorRepository.findOneOrFail({ where: { id } });
    } catch (error) {
      res.status(404).send('Professor não encontrado');
      return;
    }
    professorRepository.delete(id);
    res.status(204).send();
  };
}

export default ProfessorController;
