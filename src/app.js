
// importação das dependências
import dotenv from 'dotenv';
import express from 'express';

// inicialização do express e dotenv
dotenv.config();
const app = express();
app.use(express.json());

// conexão com mongo
import conectDB from './configs/DB.js';
conectDB();

// rotas para as entidades
import workshopRouter from "./routes/workshopRouter.js";
app.use('/workshop',workshopRouter);

import maintenanceRouter from './routes/maintenanceRouter.js';
app.use('/maintenance',maintenanceRouter);

import vehicleRouter from './routes/vehicleRouter.js';
app.use('/vehicle',vehicleRouter);

app.listen(3000,console.log(`Servidor rodando!`));