import { Request, Response } from "express"
import { ActualizarProductoBodyType, ActualizarProductoParamsType, ActualizarProductoQueryType, CrearProductoType } from "../schemas/productos.schemas";

export const crearProducto = (
    req: Request<unknown, unknown, CrearProductoType>,
    res: Response

) => {

    console.log(req.body.nombre)
    console.log(req.body.precio)
    res.send('Crear Producto')
};
export const actualizarProducto = (
    req: Request<
        ActualizarProductoParamsType,
        unknown,
        ActualizarProductoBodyType,
        ActualizarProductoQueryType>,

    res: Response
) => {
    console.log(req.body, req.params, req.query)
    const { id } = req.params;
    const { nombre, precio } = req.body;
    const { title } = req.query;
    console.log(id, nombre, precio, title)
    res.send('actualizar Producto')
};