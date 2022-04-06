import { Router } from 'express'
import BooksController from '../controllers/books.controller'
import validationBook from '../middlewares/books.middleware'

const router = Router()

const booksController = new BooksController()
const slashId = '/books/:id'

router.get('/books', booksController.getAll)
router.get(slashId, booksController.getById)
router.put(slashId, validationBook, booksController.update)
router.delete(slashId, booksController.remove)
router.post('/books', validationBook, booksController.create)

export default router
