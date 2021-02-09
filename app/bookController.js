const Book = require('../models/bookModels');


exports.create = (req, res) => {

    if(!req.body.author || !req.body.title) {
        return res.status(400).send({
            message: "no title"
        });
    }

    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        id: req.body.id
    });

    book.save()
        .then(data => {
            res.status(201).json({ message: 'Book created', data: data });
        }).catch(err => {
        res.status(500).json({
            message: err.message || "error"
        });
    });
};


exports.findAllBooks = (req, res) => {
    Book.find()
        .then(books => {
            res.status(200).json({ message: "Books retrived", data: books });
        }).catch(err => {
        res.status(500).json({
            message: err.message || "error"
        });
    });
};
exports.findOneBook = (req, res) => {
    Book.findById(req.params.id)
        .then(book => {
            if(!book) {
                return res.status(404).send({
                    message: "Book not found with id " + req.params.id
                });
            }
            res.send(book);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Book not found with id " + req.params.bookId
            });
        }
        return res.status(500).json({
            message: "Error retrieving book with id " + req.params.bookId
        });
    });
};













