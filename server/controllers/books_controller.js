var books = [];
var id = 0;
module.exports = {
    create: (req, res, next) =>{
        const { title, author } = req.body;
        books.push({title, author, id});
        id++;
        res.status(200).send(books);
    },
    read: (req, res, next) =>{
        res.status(200).send(books);
    },
    update: (req, res, next) =>{
        const id = req.params.id;
        var editI = books.findIndex((book) => {
            return book.id == id;
        })

        books[editI] = {
            title: req.body.title || books[editI].title,
            author: req.body.author || books[editI].author,
            id: books[editI].id
        }


        res.status(200).send(books);
    },
    delete: (req, res, next) =>{
        books = books.filter(e => {
            return e.id !== +req.params.id;
        })
        res.status(200).send(books);
    }
}