import { z } from 'zod'

export const CrearProductoSchema = z.object({
    body: z.object({
        nombre: z.string().nonempty('Nombre es requerido'),
        precio: z.number().nonnegative('no puede ser negativo'),
    })
})

export const ActualizarProductoSchema = z.object({
    body: z.object({
        nombre: z.string().optional(),
        precio: z.number().nonnegative().optional(),
    }),
    params: z.object({
        id: z.string().min(3)
    }),
    query: z.object({
        title: z.string()
    })
})

export type CrearProductoType = z.infer<typeof CrearProductoSchema>["body"]
export type ActualizarProductoBodyType = z.infer<typeof ActualizarProductoSchema>["body"]
export type ActualizarProductoParamsType = z.infer<typeof ActualizarProductoSchema>["params"]
export type ActualizarProductoQueryType = z.infer<typeof ActualizarProductoSchema>["query"]
