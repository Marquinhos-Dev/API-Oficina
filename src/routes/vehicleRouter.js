
import {Router} from "express";
import {store,index,update,destroy} from "../controllers/vehicleController.js";

const vehicleRouter = Router()

vehicleRouter.post('/',store);
vehicleRouter.get('/',index);
vehicleRouter.put('/:id',update);
vehicleRouter.delete('/:id',destroy);

export default vehicleRouter;