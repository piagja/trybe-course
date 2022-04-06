import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import Book from '../interfaces/book.interface'

const properties = ['title', 'price', 'author', 'isbn']

const validateProperties = (book: Book): [boolean, string | null] => {
  for (let i = 0; i < properties.length; i += 1) {
    if (!Object.prototype.hasOwnProperty.call(book, properties[i])) {
      return [false, `Property ${properties[i]} is missing`]
    }
  }

  return [true, null]
}

const validateValues = (book: Book): [boolean, string | null] => {
  const entries = Object.entries(book)
  for (let i = 0; i < entries.length; i += 1) {
    const [property, value] = entries[i]
    if (!value) {
      return [false, property]
    }
  }

  return [true, null]
}

const validationBook = (req: Request, res: Response, next: NextFunction) => {
  const book: Book = req.body

  let [valid, property] = validateProperties(book)

  if (!valid) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send(`The field ${property} is required`)
  }

  ;[valid, property] = validateValues(book)

  if (!valid) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send(`The field ${property} cannot be empty or null`)
  }

  next()
}

export default validationBook
