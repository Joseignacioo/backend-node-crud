import { Router } from 'express';
import { actualizarProducto } from '../controllers/productos/PutProductoControllers';
import { crearProducto } from '../controllers/productos/PostProductoController';
import { schemaValidation } from '../middlewares/schemaValidator.middleware';
import { ActualizarProductoSchema, CrearProductoSchema } from '../schemas/productosSchemas';

const router = Router()

router.post('/productos', schemaValidation(CrearProductoSchema), crearProducto);
router.put('/productos/:id', schemaValidation(ActualizarProductoSchema), actualizarProducto)

export default router