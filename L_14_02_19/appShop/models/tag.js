const mongoose = require('mongoose');

const { Schema } = mongoose;
const generalSchema = new Schema({
  name: {
    type: Schema.Types.String,
  },
  article: [{
    articleTag: {
      type: Schema.Types.ObjectId,
      ref: 'artile',
    },
  }],
});

const model = mongoose.model('tag', generalSchema);
module.exports = model;
