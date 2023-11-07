const {Router} = require("express")

const bookRouter = Router()

const {addBook, getBooks} = require("./controllers")

bookRouter.post("/addBook", addBook)
bookRouter.get("/getBooks", getBooks)



module.exports = bookRouter