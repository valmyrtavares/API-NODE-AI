// src/controllers/FuncionarioController.ts
import { Request, Response } from 'express';
import { AppDataSource } from '../database';
import { Funcionario } from '../models/Funcionario';

class FuncionarioController {
  static listAll = async (req: Request, res: Response) => {
    const funcionarioRepository = AppDataSource.getRepository(Funcionario);
    const funcionarios = await funcionarioRepository.find();
    res.send(funcionarios);
  };

  static getOneById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const funcionarioRepository = AppDataSource.getRepository(Funcionario);
    try {
      const funcionario = await funcionarioRepository.findOneOrFail({ where: { id } });
      res.send(funcionario);
    } catch (error) {
      res.status(404).send('Funcionário não encontrado');
    }
  };

  static createFuncionario = async (req: Request, res: Response) => {
    const { nome, funcao, celular, cep, salario } = req.body;
    const funcionario = new Funcionario();
    funcionario.nome = nome;
    funcionario.funcao = funcao;
    funcionario.celular = celular;
    funcionario.cep = cep;
    funcionario.salario = salario;

    const funcionarioRepository = AppDataSource.getRepository(Funcionario);
    try {
      await funcionarioRepository.save(funcionario);
    } catch (e) {
      res.status(400).send('Erro ao salvar funcionário');
      return;
    }
    res.status(201).send('Funcionário criado');
  };

  static updateFuncionario = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { nome, funcao, celular, cep, salario } = req.body;

    const funcionarioRepository = AppDataSource.getRepository(Funcionario);
    let funcionario;
    try {
      funcionario = await funcionarioRepository.findOneOrFail({ where: { id } });
    } catch (error) {
      res.status(404).send('Funcionário não encontrado');
      return;
    }

    funcionario.nome = nome;
    funcionario.funcao = funcao;
    funcionario.celular = celular;
    funcionario.cep = cep;
    funcionario.salario = salario;

    try {
      await funcionarioRepository.save(funcionario);
    } catch (e) {
      res.status(400).send('Erro ao atualizar funcionário');
      return;
    }

    res.status(204).send();
  };

  static deleteFuncionario = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const funcionarioRepository = AppDataSource.getRepository(Funcionario);
    let funcionario: Funcionario;
    try {
      funcionario = await funcionarioRepository.findOneOrFail({ where: { id } });
    } catch (error) {
      res.status(404).send('Funcionário não encontrado');
      return;
    }
    funcionarioRepository.delete(id);
    res.status(204).send();
  };
}

export default FuncionarioController;
