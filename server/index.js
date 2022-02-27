const express = require('express');
const mongoose = require('mongoose')
const app = express();
const FakeDb = require('./fake-db');
const productsRoutes = require('./routes/products');

// mongodb+srv://satoshi:Rg87E7KMGFU7igRc@cluster0.5wllf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// Rg87E7KMGFU7igRc
mongoose.connect('mongodb+srv://satoshi:Rg87E7KMGFU7igRc@cluster0.5wllf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(() => {
  const fakeDb = new FakeDb();
  fakeDb.initDb();
});

app.use('/api/v1/products', productsRoutes)
const PORT = process.env.PORT || '3000';


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(PORT, () => console.log('I am running!'))

