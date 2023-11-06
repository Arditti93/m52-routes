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
