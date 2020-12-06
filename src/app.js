import express from 'express'
import arithmeticsRouter from './routers/arithmetics'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors());
app.options('*', cors());
app.use(arithmeticsRouter)

export { app as default }

