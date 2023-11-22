import express, { Application, Request, Response } from 'express';
import { userRoutes } from './routes/user.route';


const app:Application = express()

app.use('/api/v1/users',userRoutes)

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to Murir DIm Tour Nad Travel"
  })
})


export default app;