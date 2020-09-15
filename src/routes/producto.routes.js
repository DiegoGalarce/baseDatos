import { Router } from 'express';
import cafeteriaControllers from '../controllers/producto.controllers';

const router = Router();

const { crearProducto,
    listarProductos,
    eliminarProducto,
    actualizarProducto } =
    cafeteriaControllers;

//crear las rutas
router.route('/').get(listarProductos).post(crearProducto);
router.route('/:id').delete(eliminarProducto).put(actualizarProducto);

export default router;