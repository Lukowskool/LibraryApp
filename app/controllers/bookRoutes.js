
module.exports = (app) => {
    const books = require('../controllers/bookController');


    app.post('/books', books.create);


    app.get('/books', books.findAllBooks());


    app.get('/book/:id', books.findOneBook());


}