import { Request, Response } from "express"
import { ActualizarProductoBodyType, ActualizarProductoParamsType, ActualizarProductoQueryType } from "../../schemas/productosSchemas";

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