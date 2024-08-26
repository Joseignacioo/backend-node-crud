import { Router } from 'express';
import { actualizarProducto, crearProducto } from '../controllers/productos.controllers';
import { schemaValidation } from '../middlewares/schemaValidator.middleware';
import { ActualizarProductoSchema, CrearProductoSchema } from '../schemas/productos.schemas';

const router = Router()

router.post('/productos', schemaValidation(CrearProductoSchema), crearProducto);
router.put('/productos/:id', schemaValidation(ActualizarProductoSchema), actualizarProducto)

export default router