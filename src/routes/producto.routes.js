import {Router} from 'express';
import cafeteriaController from '../controllers/producto.controllers';

const router = Router();

const {getPrueba} = cafeteriaController;

//crear las rutas
router.route('/').get(getPrueba)

export default router;