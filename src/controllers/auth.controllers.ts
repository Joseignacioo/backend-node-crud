import { Request, Response } from 'express';

export const login = (req: Request, res: Response) => {
    try {
        // throw new Error('my Error') error de validacion generado para testing
        console.log(req.body)
        res.send('login')
    } catch (error) {
        return res.status(500).json({message: 'Error de server interno'})
    }
}