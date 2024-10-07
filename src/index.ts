import 'reflect-metadata';
import { AppDataSource  } from './database';
import app from './app';

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log('Conectado ao banco de dados');
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => console.log('Erro ao conectar ao banco de dados:', error));
