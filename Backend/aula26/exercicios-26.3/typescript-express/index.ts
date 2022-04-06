import express, { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import Error from './middlewares/Error'
import 'express-async-errors'

import BooksRoutes from './routes/books.routes'

const app: express.Application = express()

app.use(express.json())

const PORT = 8000

app.get('/', (req: Request, res: Response) => {
  res.status(StatusCodes.OK).send('Express + TypeScript')
})

app.use(BooksRoutes)
app.use(Error)

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
