import express from 'express';
import alunoRoutes from './routes/alunoRoutes';
import professorRoutes from './routes/professorRoutes';
import funcionarioRoutes from './routes/funcionarioRoutes';

const app = express();

app.use(express.json());

// Rotas
app.use('/alunos', alunoRoutes);
app.use('/professores', professorRoutes);
app.use('/funcionarios', funcionarioRoutes);

export default app;
