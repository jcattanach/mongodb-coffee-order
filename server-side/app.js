const mongoose = require('mongoose');var express = require('express')
const app = express()
mongoose.connect('mongodb://localhost/test');
const db = mongoose.connection;
const PORT = 3001
const Order = require('./schemas/order')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('Database connected')
});

app.post('/addOrder', function(req,res){
  let orderItem = req.body.orderItem
  let name = req.body.name
  let orderEmail = req.body.email

  // create the new post model
  let order = new Order({name: name, orderEmail: orderEmail, order: orderItem})
  // save it in the database
  order.save((error,newOrder) => {

    if(error) {
      res.status(500).json({error: 'Unable to submit order'})
      return
    }

    res.json({message: "order submitted!"})

  })

})


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`))
