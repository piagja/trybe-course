import connection from '../models/connection'
import BookModel from '../models/book.model'
import Book from '../interfaces/book.interface'
import { Request, Response } from 'express'
import { NotFoundError } from 'restify-errors'

class BookService {
  public model: BookModel

  constructor () {
    this.model = new BookModel(connection)
  }

  public async getAll (): Promise<Book[]> {
    const books = await this.model.getAll()
    return books
  }

  public async create (req: Request, res: Response): Promise<Book> {
    const { title, price, author, isbn } = req.body
    const book = await this.model.create({ title, price, author, isbn })
    return book
  }

  public async getById (id: number): Promise<Book> {
    const book = await this.model.getById(id)
    return book
  }

  public async remove (id: number) {
    const foundBook = await this.model.getById(id)

    if (!foundBook) {
      throw new NotFoundError('NotFoundError')
    }

    this.model.remove(id)
  }

  public async update (id: number, book: Book) {
    const foundBook = await this.model.getById(id)

    if (!foundBook) {
      throw new NotFoundError('NotFoundError')
    }

    this.model.update(id, book)
  }
}

export default BookService
