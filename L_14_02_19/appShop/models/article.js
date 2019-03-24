const mongoose = require('mongoose');

const { Schema } = mongoose;
const generalSchema = new Schema({
  name: {
    type: Schema.Types.String,
  },
  text: {
    type: Schema.Types.String,
  },
  tags: [{
    customerTag: {
      type: 'ObjectId',
      ref: 'tag',
    },
  }],
});

const model = mongoose.model('article', generalSchema);
module.exports = model;
