const mongoose = require('mongoose');var express = require('express')
const app = express()
mongoose.connect('mongodb://localhost/test');
const db = mongoose.connection;
const PORT = 3000

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('Database connected')
});

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`))
