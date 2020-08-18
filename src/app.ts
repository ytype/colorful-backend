import morgan from 'morgan'
import helmet from 'helmet'
import express, { Request, Response, NextFunction } from 'express'
import { BAD_REQUEST } from 'http-status-codes'
import cors from 'cors'
import 'express-async-errors'
import router from './routes'
import logger from './util/logger'
import connectDB from './config/connect'

const app = express()
connectDB()

app.use(express.json({ limit : '50mb' }))
app.use(express.urlencoded({extended: true}))
app.use(helmet())
app.use(cors())

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}
if (process.env.NODE_ENV === 'production') {
    app.use(helmet())
}

app.use('/api', router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.message, err)
    return res.status(BAD_REQUEST).json({
        error: err.message
    })
})

export default app
