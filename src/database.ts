// src/database.ts
import { createConnection } from 'typeorm';
import { Aluno } from './models/Aluno';
import { Professor } from './models/Professor';
import { Funcionario } from './models/Funcionario';

export const connectDB = async () => {
  await createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'escola_db',
    entities: [Aluno, Professor, Funcionario],
    synchronize: true, // NÃO usar em produção
    charset: 'utf8mb4',
  });
};
