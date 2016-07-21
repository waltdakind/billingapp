var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var MedicationSchema = {

  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Drup name required'
  },

  dosage: {
    type: String,
    default: '',
    trim: true,
    required: 'Content required'

  },

  times: {
    type: String,
    default: '',
    trim: true,
    required: 'Content required'
  },

  route: {
    type: String,
    default: 'oral',
    trim: true,
    required: 'Content required'
}

var Medication = mongoose.model('Medication', MedicationSchema, 'Medications');
module.exports = Medication;