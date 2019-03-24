const mongoose = require('mongoose');

const { Schema } = mongoose;
const generalSchema = new Schema({
  name: {
    type: Schema.Types.String,
  },
  tags: [{
    articleTag: {
      type: 'ObjectId',
      ref: 'artile',
    },
  }],
});

const model = mongoose.model('tag', generalSchema);
module.exports = model;
