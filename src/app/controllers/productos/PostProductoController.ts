import { Request, Response } from "express"
import { CrearProductoType } from "../../schemas/productosSchemas";

export const crearProducto = (
    req: Request<unknown, unknown, CrearProductoType>,
    res: Response

) => {

    console.log(req.body.nombre)
    console.log(req.body.precio)
    res.send('Crear Producto')
};