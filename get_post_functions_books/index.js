let books = []

const postBooks = (title) => { if (title) books.push(title) } 

const getBooks = () => books

const clearBooks = () => books = []

module.exports = { postBooks, getBooks, clearBooks };