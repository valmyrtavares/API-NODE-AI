import 'reflect-metadata';
import { connectDB } from './database';
import app from './app';

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    console.log('Conectado ao banco de dados');
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(error => console.log(error));
