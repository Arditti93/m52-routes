const express = require("express")

const app = express()

app.use(express.json()) // tell my server to send and receive as JSON

const port = 5001

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})


// const books = [
//     { 
//         "title" :
//         "author" :
//         "genre" :
//     },
//     {
//         "title" :
//         "author" :
//         "genre" :
//     },
//     {
//         "title" :
//         "author" :
//         "genre" :

//     },
// ]


app.get("/getBooks", (req, res) => {
    
    // This is our database
    const book = {
        title: "Lord of the Rings",
        author: "Tolkein",
        genre: "Fantasy"
    }

    const sucessResponse = {
        message: "response sucessfully sent",
        book: book
    }

    res.json(sucessResponse)

})


app.post("/addBook", (req, res) =>  {
    // Fake database
    const books = [
        {
            title: "Book 1",
            author: "Author 1",
            genre: "Action"
        },
        {
            title: "Book 2",
            author: "Author 2",
            genre: "Fantasy",
        }
    ]

    const newBook = {
        title: req.body.Title,
        author: req.body.Author,
        genre: req.body.Genre
    }
    books.push(newBook)
    
    const sucessResponse = {
        message: "Success, new book added"
    }
    res.json(sucessResponse)
    console.log(books)
})


app.get("/findBook/:bookTitle", (req, res) => {
    // fake database
    const books = [
        {
            title: "Book 1",
            author: "Author 1",
            genre: "Action"
        },
        {
            title: "Book 2",
            author: "Author 2",
            genre: "Fantasy",
        },
        {
            title: "Book 3",
            author: "Author 3",
            genre: "Comedy",
        }
    ]

    let title = req.params["bookTitle"]
    console.log(title)

    // find and match the book in fake database
    let match = books.find(m => m.title === title)
    console.log(match)

    if (match) {
        let sucessResponse = {
            message: "Success, book found",
            book: match
        }
        res.status(200).json(sucessResponse)
    } else {

        let errorResponse = {
            message: "Sorry book not found"
        }
        res.status(501).json(errorResponse)
    }

    // search the fake database above using the book title passed in req.params
    // if the book is found send it out in a response
    // else if the book isn't found send a response saying book not found
})

