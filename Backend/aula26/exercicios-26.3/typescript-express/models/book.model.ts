import { Pool, ResultSetHeader } from 'mysql2/promise'
import Book from '../interfaces/book.interface'

export default class BookModel {
  public connection: Pool

  constructor (connection: Pool) {
    this.connection = connection
  }

  public async getAll (): Promise<Book[]> {
    const result = await this.connection.execute('SELECT * FROM books')
    const [rows] = result
    return rows as Book[]
  }

  public async create (book: Book): Promise<Book> {
    const { title, price, author, isbn } = book
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)',
      [title, price, author, isbn]
    )

    const [dataInserted] = result
    const { insertId } = dataInserted
    return { id: insertId, ...book }
  }

  public async getById (id: number): Promise<Book> {
    const query = 'SELECT * FROM books WHERE id = ?'
    const [result] = await this.connection.execute(query, [id])
    const [book] = result as Book[]
    return book
  }

  public async remove (id: number) {
    const query = 'DELETE FROM books WHERE id = ?'
    await this.connection.execute(query, [id])
  }

  public async update (id: number, book: Book) {
    const { title, price, author, isbn } = book
    const query =
      'UPDATE books SET title = ?, price = ?, author = ?, isbn = ? WHERE id = ?'
    await this.connection.execute(query, [title, price, author, isbn, id])
  }
}
