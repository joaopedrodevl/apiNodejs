import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database';

import express from 'express';
import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import adminRoutes from './routes/adminRoutes';
import alunoRoutes from './routes/alunoRoutes';
import photoRoutes from './routes/photoRoutes';

class App {
  constructor() {
    this.port = process.env.APP_PORT;
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/admins/', adminRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/photos/', photoRoutes);
  }

  startServer() {
    this.app.listen(this.port);
  }
}

export default new App();
