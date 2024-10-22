
import {Router} from 'express';
import {store,index,update,destroy} from '../controllers/workshopController.js';

const workshopRouter = Router();

workshopRouter.post('/', store);
workshopRouter.get('/', index);
workshopRouter.put('/:id', update);
workshopRouter.delete('/:id', destroy);

export default workshopRouter;