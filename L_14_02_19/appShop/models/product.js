const mongoose = require('mongoose');

const { Schema } = mongoose;
const generalSchema = new Schema({
  name: {
    type: Schema.Types.String,
  },
  description: {
    type: Schema.Types.String,
  },
  price: {
    type: Schema.Types.Number,
  },
  //   images: [{
//     img: {
//       type: ,
//     },
//   }],
  isAvalable: {
    type: Schema.Types.Boolean,
  },
});

const model = mongoose.model('product', generalSchema);
module.exports = model;
