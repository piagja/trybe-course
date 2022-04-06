"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const properties = ['title', 'price', 'author', 'isbn'];
const validateProperties = (book) => {
    for (let i = 0; i < properties.length; i += 1) {
        if (!Object.prototype.hasOwnProperty.call(book, properties[i])) {
            return [false, `Property ${properties[i]} is missing`];
        }
    }
    return [true, null];
};
const validateValues = (book) => {
    const entries = Object.entries(book);
    for (let i = 0; i < entries.length; i += 1) {
        const [property, value] = entries[i];
        if (!value) {
            return [false, property];
        }
    }
    return [true, null];
};
const validationBook = (req, res, next) => {
    const book = req.body;
    let [valid, property] = validateProperties(book);
    if (!valid) {
        return res
            .status(http_status_codes_1.StatusCodes.BAD_REQUEST)
            .send(`The field ${property} is required`);
    }
    ;
    [valid, property] = validateValues(book);
    if (!valid) {
        return res
            .status(http_status_codes_1.StatusCodes.BAD_REQUEST)
            .send(`The field ${property} cannot be empty or null`);
    }
    next();
};
exports.default = validationBook;
