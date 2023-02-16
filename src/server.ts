import express, { Response, Request, NextFunction } from 'express'
import 'express-async-errors'
import router from './routes'
import cors from 'cors'
const app = express()




app.use(cors())
app.use(express.json())
app.use(router)


app.use((err: Error, req: Request, res: Response, nxt: NextFunction) => {
    if (err instanceof Error) {
        //instanceof == typeof
        return res.status(400).json({ error: err.message })
    }
    return res.status(500).json({
        status: 'error',
        message: 'Internal server errror'
    })
})


app.listen(process.env.PORT, () => console.log('Server is running'))
