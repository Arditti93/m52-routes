require("dotenv").config()
require("./db/connection")
const express = require("express")

const app = express()

app.use(express.json()) // tell my server to send and receive as JSON

const port = 5001

const Book = require("./books/model")

// CREATE A Document / entry in our database
app.post("/addBook", async (req, res) => {
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
})


app.get("/getBooks", async (req, res) => {
    const getAllBooks = await Book.find({}) // get all books from our collection.
    
    const successResponse = {
        message: "Sucess all books found",
        book: getAllBooks
    }
    res.status(200).json(successResponse)
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})


