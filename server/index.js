const express = require('express'),
bodyParser = require('body-parser'),
booksCtrl = require('./controllers/books_controller')
app = express(),
port = 3000;

app.use(bodyParser.json());
app.use(express.static( __dirname + '/../public/build'))

app.get('/api/books', booksCtrl.read);

app.post('/api/books', booksCtrl.create);

app.put('/api/books/:id', booksCtrl.update);

app.delete('/api/books/:id', booksCtrl.delete);


app.listen(port, () => console.log(` ${port}`));