
const express = require('express');

const app = express();
app.use(express.json());

const workshopRouter = require('./routes/workshopRouter.js');
const maintenanceRouter = require('./routes/maintenanceRouter.js');
const vehicleRouter = require('./routes/vehicleRouter.js');

app.use('/workshop',workshopRouter);
app.use('/maintenance',maintenanceRouter);
app.use('/vehicle',vehicleRouter);

app.listen(3000,()=>console.log(`Servidor rodando em: http://localhost:3000/`));

/*
veículo
{
    "plate":"",
    "model":"",
    "year":"",
    "owner":"",
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
  "workshop":"6708290674cd90232ef3d488",
  "vehicle":"67082adf32e7ae00872968c0",
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