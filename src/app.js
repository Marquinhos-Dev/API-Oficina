
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const app = express();
app.use(express.json());
/*
import workshopRouter from './routes/workshopRouter';
import maintenanceRouter from './routes/maintenanceRouter';
import vehicleRouter from './routes/vehicleRouter';
*/
import conectDB from './configs/DB.js';
/*
app.use('/workshop',workshopRouter);
app.use('/maintenance',maintenanceRouter);
app.use('/vehicle',vehicleRouter);
*/
app.listen(3000,()=>{
  console.log(`Servidor rodando em: http://localhost:3000/`)
  conectDB();
});

/*
veículo
{
    "plate":"AXA9514",
    "model":"Fiesta",
    "year":"2012",
    "owner":"Seu Jorge",
    "maintenances":""
}

oficina
{
    "name":"",
    "address":"",
    "specialties":""
}

manutenção
{
    "workshop":"",
    "vehicle":"",
    "services":[{
      "name":"Alinhamento",
      "price":23.90
    },{
      "name":"Balanceamento",
      "price":32.85
    }],
    "date":"2024-10-10",
    "totalCost":61.90
}
*/