const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  name: String,
  orderDate: String,
  order: String,
  email: String
})

const Order = mongoose.model('Order',orderSchema)

module.exports = Order
