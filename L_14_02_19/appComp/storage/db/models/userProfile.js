const mongoose = require('mongoose');

const { Schema } = mongoose;
const generalSchema = new Schema({
  name: {
    type: Schema.Types.String,
    minlength: 2,
    maxlength: 30,
  },
  surname: {
    type: Schema.Types.String,
    minlength: 2,
    maxlength: 30,
  },
  birthday: {
    type: Date,
  },
  email: {
    type: Schema.Types.String,
    minlength: 5,
    maxlength: 100,
  },
});

generalSchema
  .virtual('fullName')
  .get(function () {
    return `${this.name} ${this.surname}`;
  });
const model = mongoose.model('userProfile', 
  generalSchema);

module.exports = model;
