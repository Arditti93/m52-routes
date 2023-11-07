const Book = require("./model")

// CREATE A Document / entry in our database
const addBook = async (req, res) => {
    const newBook = await Book.create({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre
    })

    const successResponse = {
        message: "success, book has been added",
        newBook: newBook
    }
    res.status(201).json(successResponse)
}


// READ
const getBooks = async (req, res) => {
    const getAllBooks = await Book.find({}) // get all books from our collection.
    
    const successResponse = {
        message: "Sucess all books found",
        book: getAllBooks
    }
    res.status(200).json(successResponse)
}

module.exports = {
    addBook,
    getBooks
}