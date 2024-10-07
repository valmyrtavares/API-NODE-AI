// src/controllers/AlunoController.ts
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Aluno } from '../models/Aluno';

class AlunoController {
  static listAll = async (req: Request, res: Response) => {
    const alunoRepository = getRepository(Aluno);
    const alunos = await alunoRepository.find();
    res.send(alunos);
  };

  static getOneById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const alunoRepository = getRepository(Aluno);
    try {
      const aluno = await alunoRepository.findOneOrFail({ where: { id } });
      res.send(aluno);
    } catch (error) {
      res.status(404).send('Aluno não encontrado');
    }
  };

  static createAluno = async (req: Request, res: Response) => {
    const { nome, idade, curso, inscrito } = req.body;
    const aluno = new Aluno();
    aluno.nome = nome;
    aluno.idade = idade;
    aluno.curso = curso;
    aluno.inscrito = inscrito;

    const alunoRepository = getRepository(Aluno);
    try {
      await alunoRepository.save(aluno);
    } catch (e) {
      res.status(400).send('Erro ao salvar aluno');
      return;
    }
    res.status(201).send('Aluno criado');
  };

  static updateAluno = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { nome, idade, curso, inscrito } = req.body;

    const alunoRepository = getRepository(Aluno);
    let aluno;
    try {
      aluno = await alunoRepository.findOneOrFail({ where: { id } });
    } catch (error) {
      res.status(404).send('Aluno não encontrado');
      return;
    }

    aluno.nome = nome;
    aluno.idade = idade;
    aluno.curso = curso;
    aluno.inscrito = inscrito;

    try {
      await alunoRepository.save(aluno);
    } catch (e) {
      res.status(400).send('Erro ao atualizar aluno');
      return;
    }

    res.status(204).send();
  };

  static deleteAluno = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const alunoRepository = getRepository(Aluno);
    let aluno: Aluno;
    try {
      aluno = await alunoRepository.findOneOrFail({ where: { id } });
    } catch (error) {
      res.status(404).send('Aluno não encontrado');
      return;
    }
    alunoRepository.delete(id);
    res.status(204).send();
  };
}

export default AlunoController;
