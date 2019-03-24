const mongoose = require('mongoose');

const { Schema } = mongoose;
const generalSchema = new Schema({
  name: {
    type: Schema.Types.String,
  },
  email: {
    type: Schema.Types.String,
  },
  orders: [{
    customerOrder: {
      type: 'ObjectId',
      ref: 'order',
    },
  }],
  isBaned: {
    type: Schema.Types.Boolean,
  },
});

const model = mongoose.model('customer', generalSchema);
module.exports = model;
