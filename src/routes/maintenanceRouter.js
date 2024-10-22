
import {Router} from "express";
import {store,index,update,destroy} from "../controllers/maintenanceController.js";

const maintenanceRouter = Router();

maintenanceRouter.post('/',store);
maintenanceRouter.get('/',index);
maintenanceRouter.put('/:id',update);
maintenanceRouter.delete('/:id',destroy);

export default maintenanceRouter;