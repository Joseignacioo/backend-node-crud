import express from 'express';
// import authRoutes from '../routes/auth.routes'
import productosRoutes from '../routes/productosRoutes'
import userRoutes from '../routes/userRoutes';

const app = express()

app.use(express.json())

// app.use(authRoutes)
app.use(productosRoutes)

app.listen(3000)
console.log('server on port', 3000)