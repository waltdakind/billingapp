var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var LocationSchema = {

  nickname: {
    type: String,
    default: '',
    trim: true,
    required: 'Title required'
  },

  address: {
    type: String,
    default: '',
    trim: true,
    required: 'Content required'

  },

  city: {
    type: String,
    required: 'Content required'
  },

  state: {
    type: String,
    default: Date.now
  }
}

var Location = mongoose.model('Location', LocationSchema, 'Locations');
module.exports = Location;