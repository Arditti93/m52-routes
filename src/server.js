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

// READ
app.get("/getBooks", async (req, res) => {
    const getAllBooks = await Book.find({}) // get all books from our collection.
    
    const successResponse = {
        message: "Sucess all books found",
        book: getAllBooks
    }
    res.status(200).json(successResponse)
})


//Task 1
// Create a route to update an author for a book on the database

app.put("/updateBook", async (req, res) => {
    // https://mongoosejs.com/docs/api/model.html#Model.updateOne()
    const updateAuthor = await Book.updateOne(
        {title: req.body.title}, 
        {author: req.body.newAuthor}
    )
    const successResponse = {
        message: "Success, book updated",
        book: updateAuthor
    }
    res.status(200).json(successResponse)

})


// Task 2 
// Create a route to delete a book on the database
// https://mongoosejs.com/docs/api/model.html#Model.deleteOne()

app.delete("/deleteBook", async (req, res) => {
    const result = await Book.deleteOne({ title: req.body.title });
    const successResponse = {
      message: "successfully deleted",
    };
    res.status(201).json(successResponse);
  });

// Task 3 
// Create a route to find one book on the database using the title
// req.params
// https://mongoosejs.com/docs/api/model.html#Model.findOne()
app.get("/findBook/:title", async (req, res) => {
    let bookTitle = req.params['title']
    
    const findBook = await Book.findOne({title: bookTitle})

    const successResponse = {
        message: "Success Response",
        book: findBook
    }

    res.status(200).json(successResponse)
})

//Task 4
// Create a route to add 2 books at once on the database
app.post("/addManyBooks", async (req, res) => {
    const newBooks = await Book.insertMany([
        {
            title: req.body.title1,
            author: req.body.author1,
            genre: req.body.genre1
        },
        {
            title: req.body.title2,
            author: req.body.author2,
            genre: req.body.genre2
        }
    ])
    const successResponse = {
        message: "success, book has been added",
        newBook: newBooks
    }
    res.status(201).json(successResponse)
})



// Task 5 - Stretch Goal
// Create a route to dynamically update any feild on the databse
app.put("/updateAll", async (req, res) => {
    // https://mongoosejs.com/docs/api/model.html#Model.updateOne()
    const updateAuthor = await Book.updateOne(
        {title: req.body.title}, 
        {[req.body.updateKey]: req.body.updateValue}
    )
    const successResponse = {
        message: "Success, book updated",
        book: updateAuthor
    }
    res.status(200).json(successResponse)
})


app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})


