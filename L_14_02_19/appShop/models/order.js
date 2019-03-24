const mongoose = require('mongoose');

const { Schema } = mongoose;
const generalSchema = new Schema({
  orderCustomer: {
    type: 'ObjectId',
    ref: 'customer',
  },
  products: [{
    orderProduct: {
      type: 'ObjectId',
      ref: 'product',
    },
  }],
});

const model = mongoose.model('order', generalSchema);
module.exports = model;
