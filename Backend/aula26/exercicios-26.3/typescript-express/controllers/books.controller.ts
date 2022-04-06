import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import BookService from '../services/books.service'

class BooksController {
  constructor (private booksService = new BookService()) {}

  public getAll = async (req: Request, res: Response) => {
    const books = await this.booksService.getAll()
    res.status(StatusCodes.OK).json(books)
  }

  public create = async (req: Request, res: Response) => {
    const book = await this.booksService.create(req, res)
    res.status(StatusCodes.CREATED).json(book)
  }

  public getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const book = await this.booksService.getById(id)

    if (!book) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: 'Book not found!'
      })
    }

    res.status(StatusCodes.OK).json(book)
  }

  public remove = async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    await this.booksService.remove(id)
    res.status(StatusCodes.OK).json({ message: 'Book deleted successfully!' })
  }

  public update = async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const book = req.body
    await this.booksService.update(id, book)

    res.status(StatusCodes.NO_CONTENT).end()
  }
}

export default BooksController
