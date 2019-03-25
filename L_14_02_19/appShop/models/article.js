const mongoose = require('mongoose');

const { Schema } = mongoose;
const generalSchema = new Schema({
  title: {
    type: Schema.Types.String,
  },
  articleText: {
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
