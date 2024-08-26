import { z } from 'zod'

export const loginSchema = z.object({
    body: z.object({
        email: z.string().
            nonempty('Email es requerido')
            .email({ message: "Email escrito es incorrecto"}),
        password: z.string()
            .nonempty('contraseña es requerida')
            .min(6, 'Contraseña muy corta'),
    }),
})